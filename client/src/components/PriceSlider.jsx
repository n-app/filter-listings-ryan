import React from 'React';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
const Range = Slider.Range;

const PriceSlider = (props) => {
  return (
    <div id='slider'>
      <div>${props.priceLimits[0]} - ${props.priceLimits[1]}+</div>
      <Range
        min={0}
        max={1000}
        allowCross={false}
        value={props.priceLimits}
        onChange={props.onSliderChange}
      />
      {props.priceLimits[0] === 0 && props.priceLimits[1] === 1000 ? null : (
        <button onClick={()=>props.clearFilter('PriceSlider')}>
          Clear
        </button>
      )}
      
      <button onClick={props.applyFilters}>
        Apply
      </button>
    </div>
  );
}

export default PriceSlider;
