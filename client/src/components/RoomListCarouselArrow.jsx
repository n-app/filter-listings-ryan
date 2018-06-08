import React from 'React';

const RoomListCarouselArrow = (props) => (
  <div onClick={props.clickFunction} className={`slide-arrow ${props.direction}`}>
    <svg> 
      {props.arrow}
    </svg>
  </div>
);

export default RoomListCarouselArrow;
