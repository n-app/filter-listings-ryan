import React from 'react';
import axios from 'axios';
import RoomListCarousel from './RoomListCarousel';
import Modal from './Modal';
import PriceSlider from './PriceSlider';
import BedroomsCounter from './BedroomsCounter';
import HomeTypeSelector from './HomeTypeSelector';
import InstantBookSelector from './InstantBookSelector';

import '../css/slider.css';
import '../css/style.css';
import '../css/image-gallery.css';

class App extends React.Component {
  static preventClose(event) {
    event.stopPropagation();
  }
  constructor(props) {
    super(props);
    this.state = {
      allRooms:
      [
        {
          id: 1, roomname: 'massa volupat', price: 570, numberOfBedrooms: 4, rating: 4, numberOfReviews: 120, urlToImage: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775', roomType: 'Private Room', instantBook: 'T',
        },
        {
          id: 2, roomname: 'pellentesque', price: 663, numberOfBedrooms: 4, rating: 2, numberOfReviews: 148, urlToImage: 'https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip', roomType: 'Entire Guest Suite', instantBook: 'T',
        },
        {
          id: 3, roomname: 'sodales cras', price: 80, numberOfBedrooms: 6, rating: 4, numberOfReviews: 105, urlToImage: 'https://atmedia.imgix.net/b02fd1a636654d7bbc01a595acf762c4c89864df?q=45&auto=format&cs=strip&usm=&h=308&fit=max', roomType: 'Entire House', instantBook: 'F',
        },
        {
          id: 4, roomname: 'praesent', price: 684, numberOfBedrooms: 4, rating: 3, numberOfReviews: 285, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly2BsH0Jw3x_VROnUcDkSm7OXmlHzz3If0PL-tZfHpdfS1SbLjA', roomType: 'Shared Room', instantBook: 'F',
        },
        {
          id: 5, roomname: 'nisi facilisis donec', price: 226, numberOfBedrooms: 1, rating: 3, numberOfReviews: 430, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM_0pexE_9G4mc5fGCmcLco8mZC_892q7P68MDhAqIsQsDHyvw', roomType: 'Entire Guest House', instantBook: 'T',
        },
        {
          id: 6, roomname: 'ac cras', price: 136, numberOfBedrooms: 7, rating: 3, numberOfReviews: 201, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KkjsLHboprlM-Etmob75zdCRhtXbHGop2FQ9ldNxjXRn8-pN8g', roomType: 'Entire Apartment', instantBook: 'F',
        },
        {
          id: 7, roomname: 'pharetra congue', price: 348, numberOfBedrooms: 3, rating: 5, numberOfReviews: 211, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xujs-rutVHuP9psB4eq_46RVcgQmVHS9O8RH9XciUK8hVC6d', roomType: 'Entire Guest Suite', instantBook: 'T',
        },
        {
          id: 8, roomname: 'class', price: 594, numberOfBedrooms: 4, rating: 2, numberOfReviews: 212, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_843qjUkImjm7CdlS7HUZft8gaiwmZtnuxBamCXNCctDbtGrJcA', roomType: 'Entire Guest House', instantBook: 'F',
        },
        {
          id: 9, roomname: 'volutpat aptent iaculis', price: 180, numberOfBedrooms: 7, rating: 1, numberOfReviews: 358, urlToImage: 'https://i.pinimg.com/originals/66/ed/a1/66eda146d5b35c52abeae178a1b82958.jpg', roomType: 'Private Room', instantBook: 'F',
        },
        {
          id: 10, roomname: 'pulvinar lacus accumsan', price: 480, numberOfBedrooms: 4, rating: 3, numberOfReviews: 201, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3P3FqmwF9RiGE6wZvnm47yNW0Y3zKZ_7jfRvomHA9m9KIdXS', roomType: 'Shared Room', instantBook: 'T',
        },
        {
          id: 11, roomname: 'consequat', price: 89, numberOfBedrooms: 5, rating: 1, numberOfReviews: 482, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8ODMs1mKu5T6ZNQYIyr4gXDfXhoHjgpQFL30Z_0a0Omq8VQ4', roomType: 'Entire House', instantBook: 'F',
        },
        {
          id: 12, roomname: 'tempus torquent praesent', price: 679, numberOfBedrooms: 1, rating: 3, numberOfReviews: 440, urlToImage: 'https://doormandesigns.com/wp-content/uploads/2016/10/alex-gernier-apartment-therapy-doorman-designs-2.jpg', roomType: 'Entire House', instantBook: 'T',
        },
      ],
      displayedRooms:
      [
        {
          id: 1, roomname: 'massa volupat', price: 570, numberOfBedrooms: 4, rating: 4, numberOfReviews: 120, urlToImage: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775', roomType: 'Private Room', instantBook: 'T',
        },
        {
          id: 2, roomname: 'pellentesque', price: 663, numberOfBedrooms: 4, rating: 2, numberOfReviews: 148, urlToImage: 'https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip', roomType: 'Entire Guest Suite', instantBook: 'T',
        },
        {
          id: 3, roomname: 'sodales cras', price: 80, numberOfBedrooms: 6, rating: 4, numberOfReviews: 105, urlToImage: 'https://atmedia.imgix.net/b02fd1a636654d7bbc01a595acf762c4c89864df?q=45&auto=format&cs=strip&usm=&h=308&fit=max', roomType: 'Entire House', instantBook: 'F',
        },
        {
          id: 4, roomname: 'praesent', price: 684, numberOfBedrooms: 4, rating: 3, numberOfReviews: 285, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly2BsH0Jw3x_VROnUcDkSm7OXmlHzz3If0PL-tZfHpdfS1SbLjA', roomType: 'Shared Room', instantBook: 'F',
        },
        {
          id: 5, roomname: 'nisi facilisis donec', price: 226, numberOfBedrooms: 1, rating: 3, numberOfReviews: 430, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM_0pexE_9G4mc5fGCmcLco8mZC_892q7P68MDhAqIsQsDHyvw', roomType: 'Entire Guest House', instantBook: 'T',
        },
        {
          id: 6, roomname: 'ac cras', price: 136, numberOfBedrooms: 7, rating: 3, numberOfReviews: 201, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KkjsLHboprlM-Etmob75zdCRhtXbHGop2FQ9ldNxjXRn8-pN8g', roomType: 'Entire Apartment', instantBook: 'F',
        },
        {
          id: 7, roomname: 'pharetra congue', price: 348, numberOfBedrooms: 3, rating: 5, numberOfReviews: 211, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xujs-rutVHuP9psB4eq_46RVcgQmVHS9O8RH9XciUK8hVC6d', roomType: 'Entire Guest Suite', instantBook: 'T',
        },
        {
          id: 8, roomname: 'class', price: 594, numberOfBedrooms: 4, rating: 2, numberOfReviews: 212, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_843qjUkImjm7CdlS7HUZft8gaiwmZtnuxBamCXNCctDbtGrJcA', roomType: 'Entire Guest House', instantBook: 'F',
        },
        {
          id: 9, roomname: 'volutpat aptent iaculis', price: 180, numberOfBedrooms: 7, rating: 1, numberOfReviews: 358, urlToImage: 'https://i.pinimg.com/originals/66/ed/a1/66eda146d5b35c52abeae178a1b82958.jpg', roomType: 'Private Room', instantBook: 'F',
        },
        {
          id: 10, roomname: 'pulvinar lacus accumsan', price: 480, numberOfBedrooms: 4, rating: 3, numberOfReviews: 201, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3P3FqmwF9RiGE6wZvnm47yNW0Y3zKZ_7jfRvomHA9m9KIdXS', roomType: 'Shared Room', instantBook: 'T',
        },
        {
          id: 11, roomname: 'consequat', price: 89, numberOfBedrooms: 5, rating: 1, numberOfReviews: 482, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8ODMs1mKu5T6ZNQYIyr4gXDfXhoHjgpQFL30Z_0a0Omq8VQ4', roomType: 'Entire House', instantBook: 'F',
        },
        {
          id: 12, roomname: 'tempus torquent praesent', price: 679, numberOfBedrooms: 1, rating: 3, numberOfReviews: 440, urlToImage: 'https://doormandesigns.com/wp-content/uploads/2016/10/alex-gernier-apartment-therapy-doorman-designs-2.jpg', roomType: 'Entire House', instantBook: 'T',
        },
      ],
      allImages: [
        {
          id: 1, roomId: 1, urlToImage: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
        },
        {
          id: 2, roomId: 2, urlToImage: 'https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip',
        },
        {
          id: 3, roomId: 3, urlToImage: 'https://atmedia.imgix.net/b02fd1a636654d7bbc01a595acf762c4c89864df?q=45&auto=format&cs=strip&usm=&h=308&fit=max',
        },
        {
          id: 4, roomId: 4, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly2BsH0Jw3x_VROnUcDkSm7OXmlHzz3If0PL-tZfHpdfS1SbLjA',
        },
        {
          id: 5, roomId: 5, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qM_0pexE_9G4mc5fGCmcLco8mZC_892q7P68MDhAqIsQsDHyvw',
        },
        {
          id: 6, roomId: 6, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KkjsLHboprlM-Etmob75zdCRhtXbHGop2FQ9ldNxjXRn8-pN8g',
        },
        {
          id: 1, roomId: 1, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xujs-rutVHuP9psB4eq_46RVcgQmVHS9O8RH9XciUK8hVC6d',
        },
        {
          id: 2, roomId: 2, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_843qjUkImjm7CdlS7HUZft8gaiwmZtnuxBamCXNCctDbtGrJcA',
        },
        {
          id: 3, roomId: 3, urlToImage: 'https://i.pinimg.com/originals/66/ed/a1/66eda146d5b35c52abeae178a1b82958.jpg',
        },
        {
          id: 4, roomId: 4, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3P3FqmwF9RiGE6wZvnm47yNW0Y3zKZ_7jfRvomHA9m9KIdXS',
        },
        {
          id: 5, roomId: 5, urlToImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8ODMs1mKu5T6ZNQYIyr4gXDfXhoHjgpQFL30Z_0a0Omq8VQ4',
        },
        {
          id: 6, roomId: 6, urlToImage: 'https://doormandesigns.com/wp-content/uploads/2016/10/alex-gernier-apartment-therapy-doorman-designs-2.jpg',
        },
      ],
      activeIndex: 0,
      isOpen: false,
      currentModalDisplay: null,
      priceLimits: [0, 1000],
      bedMin: 1,
      entirePlace: false,
      privateRoom: false,
      sharedRoom: false,
      roomTypeIsSelected: false,
      instantBook: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.decreaseBedCount = this.decreaseBedCount.bind(this);
    this.increaseBedCount = this.increaseBedCount.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.toggleHomeType = this.toggleHomeType.bind(this);
    this.toggleInstantBook = this.toggleInstantBook.bind(this);
    this.setDisplayedRooms = this.setDisplayedRooms.bind(this);
  }

  // =======WILL UNCOMMENT BELOW LATER---USING MOCK DATA DURING DEVELOPMENT======

  componentDidMount() {
    this.fetch('/filterListings/getImages', 'allImages');
    this.fetch('/filterListings/getRooms', 'allRooms')
      .then((data) => { this.setDisplayedRooms(data); });
  }

  // Helper function for PriceSlider Component
  onSliderChange(value) {
    this.setState({
      priceLimits: value,
    });
  }

  setDisplayedRooms(rooms) {
    this.setState({ displayedRooms: rooms.slice(0, 25) });
  }

  fetch(endpoint, key) {
    return axios.get(endpoint)
      .then((response) => {
        this.setState({ [key]: response.data });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  // Helper function for Modal Component
  toggleModal(modal) {
    this.setState({
      isOpen: !this.state.isOpen,
      currentModalDisplay: modal,
    });
  }

  // Helper function for BedroomCounter Component
  decreaseBedCount() {
    if (this.state.bedMin >= 2) {
      this.setState({
        bedMin: this.state.bedMin - 1,
      });
    } else {
      this.setState({
        bedMin: 1,
      });
    }
  }

  // Helper function for BedroomCounter Component
  increaseBedCount() {
    this.setState({
      bedMin: this.state.bedMin + 1,
    });
  }

  // Helper function for all filter Components
  applyFilters() {
    const filteredList = [];
    this.state.allRooms.forEach((room) => {
      if (room.roomType === 'Entire House'
        || room.roomType === 'Entire Apartment'
        || room.roomType === 'Entire Guest Suite'
        || room.roomType === 'Entire Guest House'
      ) {
        var roomType = 'entirePlace';
      } else if (room.roomType === 'Private Room') {
        var roomType = 'privateRoom';
      } else if (room.roomType === 'Shared Room') {
        var roomType = 'sharedRoom';
      }

      if (
        room.numberOfBedrooms >= this.state.bedMin
        && room.price >= this.state.priceLimits[0]
        && room.price <= this.state.priceLimits[1]
        && (
          (
            this.state.entirePlace === false
            && this.state.privateRoom === false
            && this.state.sharedRoom === false
          )
          || this.state[roomType] === true
        )
        && (
          this.state.instantBook === false
          || (this.state.instantBook === true && room.instantBook === 'T')
        )
      ) {
        filteredList.push(room);
      }
    });
    this.setDisplayedRooms(filteredList);
    this.setState({
      activeIndex: 0,
    });
    this.toggleModal(null);
  }

  // Helper function for all filter components
  clearFilter(event) {
    if (event.target.name === 'BedroomsCounter') {
      this.setState({
        bedMin: 1,
      });
    } else if (event.target.name === 'PriceSlider') {
      this.setState({
        priceLimits: [0, 1000],
      });
    } else if (event.target.name === 'HomeTypeSelector') {
      this.setState({
        entirePlace: false,
        privateRoom: false,
        sharedRoom: false,
        roomTypeIsSelected: false,
      });
    } else if (event.target.name === 'InstantBookSelector') {
      this.setState({
        instantBook: false,
      });
    }
  }

  // Helper function for Carousel Component
  previousSlide(numberOfEntriesInCarousel) {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.setState({ activeIndex: numberOfEntriesInCarousel - 3 });
    }
  }

  // Helper function for Carousel Component
  nextSlide(numberOfEntriesInCarousel) {
    if (this.state.activeIndex < numberOfEntriesInCarousel - 3) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  // Helper function for Home Type Select Component
  toggleHomeType(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    }, () => {
      if (
        this.state.entirePlace === false
        && this.state.privateRoom === false
        && this.state.sharedRoom === false
      ) {
        this.setState({ roomTypeIsSelected: false });
      } else {
        this.setState({ roomTypeIsSelected: true });
      }
    });
  }

  toggleInstantBook() {
    this.setState({
      instantBook: !this.state.instantBook,
    });
  }

  render() {
    // Rendering conditions for Price Button
    if (
      (this.state.isOpen === true && this.state.currentModalDisplay === PriceSlider)
      || (this.state.priceLimits[0] !== 0 || this.state.priceLimits[1] !== 1000)
    ) {
      var priceButtonDisplay = 'filter-on-btn';
      var priceButtonText = `$${this.state.priceLimits[0]} - $${this.state.priceLimits[1]}`;
    } else {
      var priceButtonDisplay = 'main-btn';
      var priceButtonText = 'Price';
    }

    // Rendering conditions for Bedrooms Button
    if (
      (this.state.isOpen === true && this.state.currentModalDisplay === BedroomsCounter)
      || this.state.bedMin !== 1
    ) {
      var bedroomsButtonDisplay = 'filter-on-btn';
      var bedroomsButtonText = `${this.state.bedMin}+ Beds`;
    } else {
      var bedroomsButtonDisplay = 'main-btn';
      var bedroomsButtonText = 'Bedrooms';
    }

    // Rendering conditions for Home Type Button
    if (
      this.state.isOpen === true
      && this.state.currentModalDisplay === HomeTypeSelector
      && this.state.roomTypeIsSelected === false
    ) {
      var homeTypeButtonDisplay = 'filter-on-btn';
      var homeTypeButtonText = 'Home Type';
    } else if (this.state.roomTypeIsSelected === true) {
      var roomTypes = {
        entirePlace: 'Entire Place', 
        privateRoom: 'Private Room',
        sharedRoom: 'Shared Room'
      };
      var selectedCount = 0;
      var selectedRoomTypes = [];
      Object.keys(roomTypes).forEach((roomType) => {
        if (this.state[roomType] === true) {
          selectedCount += 1;
          selectedRoomTypes.push(roomTypes[roomType]);
        }
      });
      if (selectedCount === 1) {
        var homeTypeButtonDisplay = 'filter-on-btn';
        var homeTypeButtonText = selectedRoomTypes[0];
      } else {
        var homeTypeButtonDisplay = 'filter-on-btn';
        var homeTypeButtonText = `Home Type • ${selectedCount}`;
      }
    }
    else {
      var homeTypeButtonDisplay = 'main-btn';
      var homeTypeButtonText = 'Home Type';
    }

    // Rendering conditions for Instant Book Button
    if (
      (this.state.isOpen === true && this.state.currentModalDisplay === InstantBookSelector)
      || (this.state.instantBook === true)
    ) {
      var instantBookButtonDisplay = 'filter-on-btn';
    } else {
      var instantBookButtonDisplay = 'main-btn';
    }

    return (
      <div> 
        <div id="menu-border">
          <div id="filter-listing-title">
              <span>Filter Listings</span>
          </div>

          <div className="menu">
            <span className="btn-spacer">
              <button className={priceButtonDisplay} id="price-btn" onClick={() => this.toggleModal(PriceSlider)}>{priceButtonText}</button>
            </span>
            <span className="btn-spacer">
              <button className={bedroomsButtonDisplay} id="bedrooms-btn" onClick={() => this.toggleModal(BedroomsCounter)}>{bedroomsButtonText}</button>
            </span>
            <span className="btn-spacer">
              <button className={homeTypeButtonDisplay} id="home-type-btn" onClick={() => this.toggleModal(HomeTypeSelector)}>{homeTypeButtonText}</button>
            </span>
            <span className="btn-spacer">
              <button className={instantBookButtonDisplay} id="instant-book-btn" onClick={() => this.toggleModal(InstantBookSelector)}>Instant Book</button>
            </span>
          </div>
        </div>

        <div id="modal-container">
          <Modal
            show={this.state.isOpen}
            priceLimits={this.state.priceLimits}
            onSliderChange={this.onSliderChange}
            bedMin={this.state.bedMin}
            decreaseBedCount={this.decreaseBedCount}
            increaseBedCount={this.increaseBedCount}
            applyFilters={this.applyFilters}
            clearFilter={this.clearFilter}
            toggleModal={this.toggleModal}
            currentModalDisplay={this.state.currentModalDisplay}
            preventClose={App.preventClose}
            toggleHomeType={this.toggleHomeType}
            entirePlace={this.state.entirePlace}
            privateRoom={this.state.privateRoom}
            sharedRoom={this.state.sharedRoom}
            instantBook={this.state.instantBook}
            toggleInstantBook={this.toggleInstantBook}
          />
        </div>
      
        <div className="content">
          <RoomListCarousel
            activeIndex={this.state.activeIndex}
            displayedRooms={this.state.displayedRooms}
            allImages={this.state.allImages}
            previousSlide={this.previousSlide}
            nextSlide={this.nextSlide}
          />
        </div>
      </div>
    );
  }
}

export default App;
