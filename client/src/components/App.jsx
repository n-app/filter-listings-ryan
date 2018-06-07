import React from 'react';
import axios from 'axios';
import RoomListCarousel from './RoomListCarousel.jsx';
import Modal from './Modal.jsx';
import PriceSlider from './PriceSlider.jsx';
import handle from './PriceSlider.jsx';
import '../css/slider.css';
import '../css/style.css';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allRooms: 
      [
        {"id":2,"roomname":"pellentesque","price":663,"numberOfBedrooms":4,"rating":2,"numberOfReviews":148,"urlToImage":"https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip"},
        {"id":3,"roomname":"sodales cras","price":80,"numberOfBedrooms":6,"rating":4,"numberOfReviews":105,"urlToImage":"https://atmedia.imgix.net/b02fd1a636654d7bbc01a595acf762c4c89864df?q=45&auto=format&cs=strip&usm=&h=308&fit=max"},
        {"id":3,"roomname":"sodales cras","price":80,"numberOfBedrooms":6,"rating":4,"numberOfReviews":105,"urlToImage":"https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775"},
        {"id":4,"roomname":"praesent","price":684,"numberOfBedrooms":4,"rating":3,"numberOfReviews":285,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly2BsH0Jw3x_VROnUcDkSm7OXmlHzz3If0PL-tZfHpdfS1SbLjA"},
        {"id":5,"roomname":"nisi facilisis donec","price":226,"numberOfBedrooms":1,"rating":3,"numberOfReviews":430,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM_0pexE_9G4mc5fGCmcLco8mZC_892q7P68MDhAqIsQsDHyvw"},
        {"id":6,"roomname":"ac cras","price":136,"numberOfBedrooms":7,"rating":3,"numberOfReviews":201,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KkjsLHboprlM-Etmob75zdCRhtXbHGop2FQ9ldNxjXRn8-pN8g"},
        {"id":7,"roomname":"pharetra congue","price":348,"numberOfBedrooms":3,"rating":5,"numberOfReviews":211,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xujs-rutVHuP9psB4eq_46RVcgQmVHS9O8RH9XciUK8hVC6d"},
        {"id":8,"roomname":"class","price":594,"numberOfBedrooms":4,"rating":2,"numberOfReviews":212,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_843qjUkImjm7CdlS7HUZft8gaiwmZtnuxBamCXNCctDbtGrJcA"},
        {"id":9,"roomname":"volutpat aptent iaculis","price":180,"numberOfBedrooms":7,"rating":1,"numberOfReviews":358,"urlToImage":"https://i.pinimg.com/originals/66/ed/a1/66eda146d5b35c52abeae178a1b82958.jpg"},
        {"id":10,"roomname":"pulvinar lacus accumsan","price":480,"numberOfBedrooms":4,"rating":3,"numberOfReviews":201,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3P3FqmwF9RiGE6wZvnm47yNW0Y3zKZ_7jfRvomHA9m9KIdXS"},
        {"id":11,"roomname":"consequat","price":89,"numberOfBedrooms":5,"rating":1,"numberOfReviews":482,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8ODMs1mKu5T6ZNQYIyr4gXDfXhoHjgpQFL30Z_0a0Omq8VQ4"},
        {"id":12,"roomname":"tempus torquent praesent","price":679,"numberOfBedrooms":1,"rating":3,"numberOfReviews":440,"urlToImage":"https://doormandesigns.com/wp-content/uploads/2016/10/alex-gernier-apartment-therapy-doorman-designs-2.jpg"},
      ],
      displayedRooms:
      [
        {"id":2,"roomname":"pellentesque","price":663,"numberOfBedrooms":4,"rating":2,"numberOfReviews":148,"urlToImage":"https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip"},
        {"id":3,"roomname":"sodales cras","price":80,"numberOfBedrooms":6,"rating":4,"numberOfReviews":105,"urlToImage":"https://atmedia.imgix.net/b02fd1a636654d7bbc01a595acf762c4c89864df?q=45&auto=format&cs=strip&usm=&h=308&fit=max"},
        {"id":4,"roomname":"praesent","price":684,"numberOfBedrooms":4,"rating":3,"numberOfReviews":285,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly2BsH0Jw3x_VROnUcDkSm7OXmlHzz3If0PL-tZfHpdfS1SbLjA"},
        {"id":5,"roomname":"nisi facilisis donec","price":226,"numberOfBedrooms":1,"rating":3,"numberOfReviews":430,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM_0pexE_9G4mc5fGCmcLco8mZC_892q7P68MDhAqIsQsDHyvw"},
        {"id":6,"roomname":"ac cras","price":136,"numberOfBedrooms":7,"rating":3,"numberOfReviews":201,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KkjsLHboprlM-Etmob75zdCRhtXbHGop2FQ9ldNxjXRn8-pN8g"},
        {"id":7,"roomname":"pharetra congue","price":348,"numberOfBedrooms":3,"rating":5,"numberOfReviews":211,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xujs-rutVHuP9psB4eq_46RVcgQmVHS9O8RH9XciUK8hVC6d"},
        {"id":8,"roomname":"class","price":594,"numberOfBedrooms":4,"rating":2,"numberOfReviews":212,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_843qjUkImjm7CdlS7HUZft8gaiwmZtnuxBamCXNCctDbtGrJcA"},
        {"id":9,"roomname":"volutpat aptent iaculis","price":180,"numberOfBedrooms":7,"rating":1,"numberOfReviews":358,"urlToImage":"https://i.pinimg.com/originals/66/ed/a1/66eda146d5b35c52abeae178a1b82958.jpg"},
        {"id":10,"roomname":"pulvinar lacus accumsan","price":480,"numberOfBedrooms":4,"rating":3,"numberOfReviews":201,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3P3FqmwF9RiGE6wZvnm47yNW0Y3zKZ_7jfRvomHA9m9KIdXS"},
        {"id":11,"roomname":"consequat","price":89,"numberOfBedrooms":5,"rating":1,"numberOfReviews":482,"urlToImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8ODMs1mKu5T6ZNQYIyr4gXDfXhoHjgpQFL30Z_0a0Omq8VQ4"},
        {"id":12,"roomname":"tempus torquent praesent","price":679,"numberOfBedrooms":1,"rating":3,"numberOfReviews":440,"urlToImage":"https://doormandesigns.com/wp-content/uploads/2016/10/alex-gernier-apartment-therapy-doorman-designs-2.jpg"},
      ],
      activeIndex: 0,
      isOpen: false,
      currentModalDisplay: null,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  // componentDidMount() {
  //   this.fetch('/getRooms');
  // }

  // fetch(endpoint) {
  //   axios.get(endpoint)
  //     .then((response) => {
  //       this.setState({allRooms: response.data})
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  toggleModal(modalType) {
    console.log(modalType)
    this.setState({
      isOpen:!this.state.isOpen,
      currentModalDisplay: modalType,
    });
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  previousSlide() {
    if (this.state.activeIndex > 0) {
      this.setState({activeIndex: this.state.activeIndex - 1});
    } else {
      this.setState({activeIndex: 3})
    }
  }

  nextSlide() {
    if (this.state.activeIndex < 3) {
      this.setState({activeIndex: this.state.activeIndex + 1});
    } else {
      this.setState({activeIndex: 0})
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={()=> this.toggleModal(PriceSlider)}>
          Bedrooms
        </button>

        <Modal show={this.state.isOpen} toggleModal={this.toggleModal} currentModalDisplay={this.state.currentModalDisplay}  preventClose={this.stopPropagation}/>
        
        <RoomListCarousel activeIndex={this.state.activeIndex} displayedRooms={this.state.displayedRooms} previousSlide={this.previousSlide} nextSlide={this.nextSlide}/>
      </div>
    )
  }
}

export default App;
