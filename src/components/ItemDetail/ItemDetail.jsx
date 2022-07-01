import React from "react";
import PropTypes from 'prop-types';
import lager from '../img/lager.jpeg'
import './ItemDetail.css'
import CountButton from "../Counter/Counter";

function ItemDetail(props) {
  const { item } = props;
  return (
    <React.Fragment>
      <img src={lager} alt="Bohemian pivo" id='lags'/>
      <div id='card'>
        <h1>Detail</h1>
        <h3>{item.location} style {item.name}</h3>
        <p>Pint: ${item.price} ABV: {item.abv}%</p>
        <CountButton decrementBy={-1} />
      </div>
      <hr/>
    </React.Fragment>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;
