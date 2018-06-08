import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

const ImageCarousel = (props) => {
  const images = [
    {
      original: 'https://atmedia.imgix.net/030616f993aec78588e203c922d8036913101c27?auto=format&q=45&w=640.0&h=430.0&fit=max&cs=strip',
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