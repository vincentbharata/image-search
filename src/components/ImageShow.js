function ImageShow({ image }) {
  // Check if image.urls.small and image.alt_description exist before rendering
  if (!image.urls || !image.urls.small || !image.alt_description) {
    return null;
  }

  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
  
  export default ImageShow;
  