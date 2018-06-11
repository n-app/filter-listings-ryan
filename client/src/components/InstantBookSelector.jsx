import React from 'react';
import PropTypes from 'prop-types';

function InstantBookSelector(props) {
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
        <label className="switch" htmlFor="instant-book-input">
          <input type="checkbox" id="instant-book-input" onChange={props.toggleInstantBook} checked={props.instantBook} />
          <span className="toggle round" />
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
  );
}

InstantBookSelector.propTypes = {
  toggleInstantBook: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
  instantBook: PropTypes.bool.isRequired,
};

export default InstantBookSelector;
