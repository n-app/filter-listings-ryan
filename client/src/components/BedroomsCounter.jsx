import React from 'react';

const BedroomsCounter = (props) => {
  return (
    <div id="bedrooms-counter-content">
      <div className="modal-text">
        <span>Beds</span>

        <div className="plus-minus-content">
          <button className="plus-minus-btn" disabled ={props.bedMin === 1 ? true:false} id="decrease-btn" onClick={props.decreaseBedCount}>-</button>
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
  )
}

export default BedroomsCounter;
