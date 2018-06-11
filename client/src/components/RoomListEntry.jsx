import React from 'react';
import StarRatings from 'react-star-ratings';
import ImageCarousel from './ImageCarousel.jsx';

const RoomListEntry = (props) => {
  let slideStyle = {
    transform: `translateX(${props.activeIndex * -100}%)`,
    transition: '0.2s',
  }
  return (
    <div className="image-slide" style={slideStyle}>
      <div className="room-entry-img">
        <ImageCarousel url={props.room.urlToImage}/>
      </div>
      <div className="bedroomNum">{props.room.roomType} • {props.room.numberOfBedrooms} {props.room.numberOfBedrooms === 1 ? 'Bed' : 'Beds'}</div>
      <div className="roomName">{props.room.roomname}</div>
      <div className="price">${props.room.price} per night</div>
      <StarRatings rating={props.room.rating} starRatedColor="#008489" numberOfStars={5} starDimension="10px" starSpacing="0px" />
      <span className="rating">{props.room.numberOfReviews}</span>
    </div>
  )
}

export default RoomListEntry;
