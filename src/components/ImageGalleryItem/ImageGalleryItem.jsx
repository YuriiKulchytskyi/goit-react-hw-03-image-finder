import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt={image.tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem