import React from 'react';
import PropTypes from 'prop-types';

function BedroomsCounter(props) {
  return (
    <div id="bedrooms-counter-content">
      <div className="modal-text">
        <span>Beds</span>

        <div className="plus-minus-content">
          <button className="plus-minus-btn" disabled={props.bedMin === 1} id="decrease-btn" onClick={props.decreaseBedCount}>-</button>
          <span id="bed-count">{props.bedMin}+</span>
          <button className="plus-minus-btn" id="increase-btn" onClick={props.increaseBedCount}>+</button>
        </div>
      </div>
      {props.bedMin === 1 ? null : (
        <button className="clear-btn" name="BedroomsCounter" onClick={props.clearFilter}>
          Clear
        </button>
      )}
      <button className="apply-btn" onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  );
}

BedroomsCounter.propTypes = {
  bedMin: PropTypes.number.isRequired,
  decreaseBedCount: PropTypes.func.isRequired,
  increaseBedCount: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
};

export default BedroomsCounter;
