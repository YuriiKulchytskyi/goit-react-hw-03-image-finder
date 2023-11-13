import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import '../StyleApp/App.css'

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery