import React from 'React';
import RoomListEntry from './RoomListEntry.jsx';
import RoomListCarouselArrow from './RoomListCarouselArrow.jsx'

const RoomListCarousel = (props) => {
  return (
    <div className='carousel'>
      <RoomListCarouselArrow
          direction="left"
          clickFunction={props.previousSlide}
          glyph="&#9664;" />

      <div id='room-carousel'>
        {props.displayedRooms.map((room, index) => <RoomListEntry key={index} room={room} activeIndex={props.activeIndex}/>)}
      </div>

      <RoomListCarouselArrow
          direction="right"
          clickFunction={props.nextSlide}
          glyph="&#9654;" />
    </div>
  )
}

export default RoomListCarousel;
