import React from "react";
import PropTypes from 'prop-types';

function Item(props) {

  return (
    <React.Fragment>
      <h3>{props.name} - {props.beerstyle}</h3>
      <p>{props.price} - <em>{props.abv}</em></p>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  beerstyle: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.umber
}

export default Item;