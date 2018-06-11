import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

const { Range } = Slider;

function PriceSlider(props) {
  return (
    <div id="slider-content">
      <div className="modal-text">
        ${props.priceLimits[0]} - ${props.priceLimits[1]}+
      </div>
      <div id="slider">
        <Range
          min={0}
          max={1000}
          allowCross={false}
          value={props.priceLimits}
          onChange={props.onSliderChange}
        />
      </div>
      {props.priceLimits[0] === 0 && props.priceLimits[1] === 1000 ? null : (
        <button className="clear-btn" name="PriceSlider" onClick={props.clearFilter}>
          Clear
        </button>
      )}

      <button className="apply-btn" onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  );
}

PriceSlider.propTypes = {
  priceLimits: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSliderChange: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
};

export default PriceSlider;
