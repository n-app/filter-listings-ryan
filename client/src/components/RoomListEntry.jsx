import React from 'React';
import StarRatings from 'react-star-ratings';

const RoomListEntry = (props) => {
  let slideStyle = {
    transform: `translateX(${props.activeIndex * -100}%)`,
    transition: '0.2s'
  }
  return (
    <div className='image-slide' style={slideStyle}>
      <img className='roomEntryImg' src={props.room.urlToImage}></img>
      <div className='bedroomNum'>{props.room.numberOfBedrooms} Beds</div>
      <div className='roomName'>{props.room.roomname}</div>
      <div className='price'>${props.room.price} per night</div>
      <StarRatings rating={props.room.rating} starRatedColor='#008489' numberOfStars={5} starDimension='10px' starSpacing='0px'/>
      <span className='rating'>{props.room.numberOfReviews}</span>
    </div>
  )
}

export default RoomListEntry;
