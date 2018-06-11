import React from 'react';
import PropTypes from 'prop-types';

function RoomListCarouselArrow(props) {
  return (
    <div onClick={props.clickFunction} >
      <svg className={`slide-arrow ${props.direction}`} viewBox="0 0 18 18" role="img">
        {props.arrow}
      </svg>
    </div>
  );
}

RoomListCarouselArrow.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  arrow: PropTypes.element.isRequired,
};

export default RoomListCarouselArrow;
