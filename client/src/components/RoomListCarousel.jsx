import React from 'React';
import RoomListEntry from './RoomListEntry.jsx';
import RoomListCarouselArrow from './RoomListCarouselArrow.jsx'

const RoomListCarousel = (props) => {
  let halfLength = Math.ceil(props.displayedRooms.length / 2);    
  let firstHalf = props.displayedRooms.slice(0,halfLength);
  let secondHalf = props.displayedRooms.slice(halfLength,props.displayedRooms.length);
  return (
    <div className="carousel-content">
      <RoomListCarouselArrow
          direction="left"
          clickFunction={props.previousSlide}
          arrow={<path d="m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z"></path>} 
      />

      <div id="carousel">
        <div id="room-carousel">
          {firstHalf.map((room, index) => <RoomListEntry key={index} room={room} activeIndex={props.activeIndex}/>)}
        </div>

        <div id="room-carousel">
          {secondHalf.map((room, index) => <RoomListEntry key={index} room={room} activeIndex={props.activeIndex}/>)}
        </div>
      </div>

      <RoomListCarouselArrow
          direction="right"
          clickFunction={props.nextSlide}
          arrow={<path d="m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z"></path>}
      />
    </div>
  )
}

export default RoomListCarousel;
