import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {

  function handleNewItemSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation(
      {
        name: event.target.name.value,
        location: event.target.location.value,
        price: event.target.price.value,
        abv: event.target.abv.value,
        id: v4()});
  }
  return (
    <React.Fragment>
       <form onSubmit={handleNewItemSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Names' />
        <input
          type='text'
          location='location'
          placeholder='Beer Location' />
        {/* <input
          type='number'
          price='price'
          placeholder='Price per Pint' />
        <input
          type='number'
          abv='abv'
          placeholder='Alcohol by Volume' /> */}
        
        <button type='submit'>Hook up the Keg!</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;