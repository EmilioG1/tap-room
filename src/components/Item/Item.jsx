import React from "react";
import PropTypes from 'prop-types';

function Item(props) {

  return (
    <div onClick={() => props.whenItemClicked(props.id)}>
      <h3>{props.location} style {props.name}</h3>
      <p>${props.price} - <em>{props.abv}%</em></p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;