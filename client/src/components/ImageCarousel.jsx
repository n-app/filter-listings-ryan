import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

function ImageCarousel(props) {
  const images = [];
  props.roomImages.forEach((url) => {
    images.push({ original: url });
  });

  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showBullets
    />
  );
}

ImageCarousel.propTypes = {
  roomImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default ImageCarousel;
