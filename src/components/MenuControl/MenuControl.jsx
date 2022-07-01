import React from "react";
import NewItemForm from "../NewItemForm/NewItemForm";
import Menu from "../Menu/Menu";

class MenuControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm />
    } else {
      currentlyVisibleState = <Menu />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default MenuControl;