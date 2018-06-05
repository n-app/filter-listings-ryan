import React from 'React';
import RoomListEntry from './RoomListEntry.jsx';

const RoomList = (props) => {
  return (
    props.displayedRooms.map((room, index) => <RoomListEntry key={index} room={room}/>)
  )
}

export default RoomList;