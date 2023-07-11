import React from 'react';

function ImageShow({ image }) {
  if (!image.urls || !image.urls.small || !image.alt_description) {
    return null;
  }

  const handleOpen = () => {
    const link = document.createElement('a');
    link.href = image.urls.small;
    link.open = 'image.jpg';
    link.target = '_blank'; 
    link.click();
  };

  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} onClick={handleOpen} />
    </div>
  );
}

export default ImageShow;
