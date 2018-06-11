import React from 'react';

const InstantBookSelector = (props) => {
  return (
    <div className="instant-book-selector-content">
      <div id="instant-book-text">
        <div className="modal-text">
          Instant Book
        </div>
        <div className="sub-text">
          Listings you can book without waiting for host approval
        </div>
      </div>
      <div id="instant-book-toggle">
        <label className="switch" >
            <input type="checkbox" onChange={props.toggleInstantBook} checked={props.instantBook}></input>
            <span className="toggle round"></span>
        </label>
      </div>
      
      {props.instantBook === false ? null : (
        <button className="clear-btn" name="InstantBookSelector" onClick={props.clearFilter}>
          Clear
        </button>
      )}
      
      <button className="apply-btn" onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  )
}

export default InstantBookSelector;