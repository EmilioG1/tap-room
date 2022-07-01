import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation(
      {
        name: event.target.name.value,
        style: event.target.style.value,
        price: event.target.price.value,
        abv: event.target.abv.value,
        id: v4()
      }
    );
  }
  return (
    <React.Fragment>
       <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Names' />
        <input
          type='text'
          beerStyle='beerStyle'
          placeholder='Beer Style' />
        <input
          type='number'
          price='price'
          placeholder='Price per Pint' />
        <input
          type='number'
          abv='abv'
          placeholder='Alcohol by Volume' />
        
        <button type='submit'>Hook up the Keg!</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;