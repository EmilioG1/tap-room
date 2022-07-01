import React from "react";
import PropTypes from 'prop-types';
import lager from '../img/lager.jpeg'
import './ItemDetail.css'

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <img src={lager} alt="Bohemian pivo" id='lags'/>
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
