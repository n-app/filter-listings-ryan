import React from 'React';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
const Range = Slider.Range;


class PriceSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0,1000],
    };

  this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    console.log('change')
    this.setState({
      value,
    });
  }
  
  render() {
    return (
      <div id='slider'>
        <div>${this.state.value[0]} - ${this.state.value[1]}+</div>
        <Range min={0} max={1000} allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

export default PriceSlider;
