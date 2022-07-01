import React from "react";
import Item from "../Item/Item";
import biergarten from './../img/biergarten.jpeg'
import PropTypes from 'prop-types';


function Menu(props) {
  return (
    <React.Fragment>
      <img src={biergarten} alt='An alpine bierhaus' />
      <hr />
      {props.menuList.map((item) => 
        <Item
          whenItemClicked = { props.onItemSelection }
          name={item.name}
          location={item.location}
          price={item.price}
          abv={item.abv}
          id={item.id}
          key={item.id} />
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menuList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default Menu;
