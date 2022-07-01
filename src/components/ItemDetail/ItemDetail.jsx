import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <h1>Detail</h1>
      <h3>{item.name} - {item.location}</h3>
      <p>{item.price} - <em>{item.abv}</em></p>
      <hr/>
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;
