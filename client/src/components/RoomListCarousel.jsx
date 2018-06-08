import React from 'React';
import RoomListEntry from './RoomListEntry.jsx';
import RoomListCarouselArrow from './RoomListCarouselArrow.jsx'

const RoomListCarousel = (props) => {
  let halfLength = Math.ceil(props.displayedRooms.length / 2);    
  let firstHalf = props.displayedRooms.slice(0,halfLength);
  let secondHalf = props.displayedRooms.slice(halfLength,props.displayedRooms.length);
  return (
    <div className='carousel'>
      <RoomListCarouselArrow
          direction="left"
          clickFunction={props.previousSlide}
          glyph="&#9664;" />

      <div id='room-carousel'>
        {firstHalf.map((room, index) => <RoomListEntry key={index} room={room} activeIndex={props.activeIndex}/>)}
      </div>

      <div id='room-carousel'>
        {secondHalf.map((room, index) => <RoomListEntry key={index} room={room} activeIndex={props.activeIndex}/>)}
      </div>

      <RoomListCarouselArrow
          direction="right"
          clickFunction={props.nextSlide}
          glyph="&#9654;" />
    </div>
  )
}

export default RoomListCarousel;
