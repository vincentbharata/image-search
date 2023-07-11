
import React from 'react';
import ImageShow from './ImageShow';
import './ImageList.css'

function ImageList({ images }) {
  // Check if images is not defined or not an array
   if (!images || !Array.isArray(images)) {
     return <div>No images to display.</div>;
   }

  const renderedImages = images.map((image) => {
    // Check if image.urls.small and image.alt_description exist before rendering
    if (!image.urls || !image.urls.small || !image.alt_description) {
      return null;
    }

    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="Image-list">{renderedImages}</div>;
}

export default ImageList;