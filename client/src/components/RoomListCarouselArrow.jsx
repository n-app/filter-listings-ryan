import React from 'React';

const RoomListCarouselArrow = (props) => (
  <div
    className={`slide-arrow ${props.direction}`}
    onClick={props.clickFunction}>
    {props.glyph}
  </div>
);

export default RoomListCarouselArrow;
