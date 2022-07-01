import React from "react";
import PropTypes from 'prop-types';

function Item(props) {

  return (
    <React.Fragment>
      <h3>{props.name} - {props.beerStyle}</h3>
      <p>{props.price} - <em>{props.abv}</em></p>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  beerStyle: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number
}

export default Item;