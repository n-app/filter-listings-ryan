import React from 'React';

const Modal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal-overlay-div" onClick={props.applyFilters}>
        <div className="modal-content-div" >
        <div className="modal-dialog-div" onClick={props.preventClose}>
          {<props.currentModalDisplay
            priceLimits={props.priceLimits}
            onSliderChange={props.onSliderChange}
            bedMin = {props.bedMin}
            decreaseBedCount = {props.decreaseBedCount}
            increaseBedCount = {props.increaseBedCount}
            toggleModal = {props.toggleModal}
            applyFilters = {props.applyFilters}
            clearFilter = {props.clearFilter}
          />}
        </div>
        </div>
      </div>
    );
  }
}

export default Modal
