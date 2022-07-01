import React from "react";

function Item(props) {

  return (
    <React.Fragment>
      <h3>{props.name} - {props.brewery}</h3>
      <p>{props.price} - <em>{props.abv}</em></p>
    </React.Fragment>
  );
}

export default Item;