import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className='modal-overlay-div' onClick={() => props.toggleModal(null)}>
        <div className='modal-content-div' >
        <div className="modal-dialog-div" onClick={props.preventClose}>
          {<props.currentModalDisplay
            priceLimits={props.priceLimits}
            onSliderChange={props.onSliderChange}
            bedMin = {props.bedMin}
            decreaseBedCount = {props.decreaseBedCount}
            increaseBedCount = {props.increaseBedCount}
            toggleModal = {props.toggleModal}
            applyFilters = {props.applyFilters}
          />}
        </div>
        </div>
      </div>
    );
  }
}

export default Modal
