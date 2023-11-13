import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
import '../StyleApp/App.css'

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt={image.tags} className='ImageGalleryItem-image'/>
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem