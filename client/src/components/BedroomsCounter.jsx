import React from 'React';

const BedroomsCounter = (props) => {
  if (props.bedMin === 1) {
    var atDefault = true;
  } else {
    var atDefault = false;
  }
  
  return (
    <div id="bedrooms-counter-content">
      <div className="modal-text">
        <span>Beds</span>

        <div className="plus-minus-content">
          <button className="plus-minus-btn" disabled={atDefault} id="decrease-btn" onClick={props.decreaseBedCount}>-</button>
          <span id="bed-count">{props.bedMin}+</span>
          <button className="plus-minus-btn" id="increase-btn" onClick={props.increaseBedCount}>+</button>
        </div>
      </div>

      {props.bedMin === 1 ? null : (
        <button className="clear-btn" onClick={()=>props.clearFilter('BedroomsCounter')}>
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
