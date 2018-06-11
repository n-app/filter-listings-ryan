import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

const ImageCarousel = (props) => {
  const images = [
    {
      original: props.url,
    },
    {
      original: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
    },
  ]

  return (
    <ImageGallery 
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showBullets={true}

      />
  );
}

export default ImageCarousel;