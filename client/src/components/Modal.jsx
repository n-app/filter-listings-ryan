import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-overlay-div" onClick={props.applyFilters}>
      <div className="modal-content-div" >
        <div className="modal-dialog-div" onClick={props.preventClose}>
          <props.currentModalDisplay
            priceLimits={props.priceLimits}
            onSliderChange={props.onSliderChange}
            bedMin={props.bedMin}
            decreaseBedCount={props.decreaseBedCount}
            increaseBedCount={props.increaseBedCount}
            toggleModal={props.toggleModal}
            applyFilters={props.applyFilters}
            clearFilter={props.clearFilter}
            toggleHomeType={props.toggleHomeType}
            entirePlace={props.entirePlace}
            privateRoom={props.privateRoom}
            sharedRoom={props.sharedRoom}
            instantBook={props.instantBook}
            toggleInstantBook={props.toggleInstantBook}
          />
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  priceLimits: PropTypes.arrayOf(PropTypes.number).isRequired,
  bedMin: PropTypes.number.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  decreaseBedCount: PropTypes.func.isRequired,
  increaseBedCount: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleHomeType: PropTypes.func.isRequired,
  entirePlace: PropTypes.bool.isRequired,
  privateRoom: PropTypes.bool.isRequired,
  sharedRoom: PropTypes.bool.isRequired,
  clearFilter: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
  instantBook: PropTypes.bool.isRequired,
  toggleInstantBook: PropTypes.func.isRequired,
};

export default Modal;
