import React from "react";
import Item from "../Item/Item";
import biergarten from './../img/biergarten.jpeg'
import PropTypes from 'prop-types';


function Menu(props) {
  return (
    <React.Fragment>
      <img src={biergarten} alt='An alpine bierhaus' />
      <h1>Haus Menu</h1>
      {props.menuList.map((item, index) => 
        <Item name={item.name}
          beerStyle={item.beerStyle}
          price={item.price}
          abv={item.abv}
          key={index} />
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menuList: PropTypes.array
};

export default Menu;
