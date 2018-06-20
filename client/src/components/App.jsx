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
      allRooms: [],
      displayedRooms: [],
      allImages: [],
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
