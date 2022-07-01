import React from "react";
import NewItemForm from "../NewItemForm/NewItemForm";
import Menu from "../Menu/Menu";

class MenuControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = 'Back to Beer Menu';
    } else {
      currentlyVisibleState = <Menu menuList={this.state.mainItemList} />;
      buttonText = 'Add beer';
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MenuControl;