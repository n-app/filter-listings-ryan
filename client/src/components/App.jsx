import React from 'react';
import axios from 'axios';
import RoomList from './RoomList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allRooms: 
      [
        {"id":1,"roomname":"blandit","price":740,"numberOfBedrooms":3,"rating":2,"numberOfReviews":125,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_0.jpg"},
        {"id":2,"roomname":"pellentesque","price":663,"numberOfBedrooms":4,"rating":2,"numberOfReviews":148,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_1.jpg"},
        {"id":3,"roomname":"sodales cras","price":80,"numberOfBedrooms":6,"rating":4,"numberOfReviews":105,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_2.jpg"},
        {"id":4,"roomname":"praesent","price":684,"numberOfBedrooms":4,"rating":3,"numberOfReviews":285,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_3.jpg"},
        {"id":5,"roomname":"nisi facilisis donec","price":226,"numberOfBedrooms":1,"rating":3,"numberOfReviews":430,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_4.jpg"}
      ],
      displayedRooms:
      [
        {"id":1,"roomname":"blandit","price":740,"numberOfBedrooms":3,"rating":2,"numberOfReviews":125,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_0.jpg"},
        {"id":2,"roomname":"pellentesque","price":663,"numberOfBedrooms":4,"rating":2,"numberOfReviews":148,"urlToImage":"https://s3.us-east-2.amazonaws.com/airbnb-clone-pics/room-pic_1.jpg"},
      ]
    }
  }

  componentDidMount() {
    this.fetch('/getRooms');
  }

  fetch(endpoint) {
    axios.get(endpoint)
      .then((response) => {
        this.setState({allRooms: response.data})
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <RoomList displayedRooms={this.state.displayedRooms}/>
      </div>
    )
  }
}

export default App;
