import React from "react";
import Item from "../Item/Item";
import biergarten from './../img/biergarten.jpeg'

const mainMenuList = [
  {
    name: 'Pilsner',
    style: 'German',
    price: '5',
    abv: '4.5'
  },
  {
    name: 'Helles',
    style: 'Munich',
    price: '4',
    abv: '4.5'
  },
  {
    name: 'Pilsener',
    style: 'Czech',
    price: '6',
    abv: '5'
  }
]

function Menu() {
  return (
    <React.Fragment>
      <img src={biergarten} alt='An alpine bierhaus' />
      <h1>Haus Menu</h1>
      {mainMenuList.map((item, index) => 
        <Item name={item.name}
          style={item.style}
          price={item.price}
          abv={item.abv}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default Menu;
