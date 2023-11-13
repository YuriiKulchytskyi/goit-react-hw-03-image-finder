import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => (
  <button type="button" className="load-more" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button