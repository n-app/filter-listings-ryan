import React from 'react';
import PriceSlider from './PriceSlider.jsx';
import BedroomsCounter from './BedroomsCounter.jsx';
import HomeTypeSelector from './HomeTypeSelector.jsx';
import InstantBookSelector from './InstantBookSelector.jsx';

const Modal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-overlay-div" onClick={props.applyFilters}>
        <div className="modal-content-div" >
        <div className="modal-dialog-div" onClick={props.preventClose}>
          <props.currentModalDisplay
            priceLimits={props.priceLimits}
            onSliderChange={props.onSliderChange}
            bedMin = {props.bedMin}
            decreaseBedCount = {props.decreaseBedCount}
            increaseBedCount = {props.increaseBedCount}
            toggleModal = {props.toggleModal}
            applyFilters = {props.applyFilters}
            clearFilter = {props.clearFilter}
            toggleHomeType = {props.toggleHomeType}
            entirePlace = {props.entirePlace}
            privateRoom = {props.privateRoom}
            sharedRoom = {props.sharedRoom}
            instantBook = {props.instantBook}
            toggleInstantBook = {props.toggleInstantBook}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Modal
