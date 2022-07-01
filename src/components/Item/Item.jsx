import React from "react";
import PropTypes from 'prop-types';

function Item(props) {

  return (
    <div onClick={() => props.whenItemClicked(props.id)}>
      <h3>{props.name} - {props.location}</h3>
      <p>{props.price} - <em>{props.abv}</em></p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;