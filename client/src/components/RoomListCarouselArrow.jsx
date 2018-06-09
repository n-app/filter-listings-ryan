import React from 'React';

const RoomListCarouselArrow = (props) => (
  <div className="inline-block" onClick={props.clickFunction} >
    <svg className={`slide-arrow ${props.direction}`} viewBox="0 0 18 18" role="img"> 
      {props.arrow}
    </svg>
  </div>
);

export default RoomListCarouselArrow;
