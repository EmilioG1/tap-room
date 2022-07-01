import React from "react";
import Item from "../Item/Item";

function Menu() {
  return (
    <React.Fragment>
      <h1>Haus Menu</h1>
      <Item
        name='Pilsner'
        brewery='Ayinger'
        price='5'
        abv='4.5'
      />
    </React.Fragment>
  );
}

export default Menu;
