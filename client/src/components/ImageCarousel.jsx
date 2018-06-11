import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

function ImageCarousel(props) {
  const images = [
    {
      original: props.url,
    },
    {
      original: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
    },
  ];

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
  url: PropTypes.string.isRequired,
};


export default ImageCarousel;
