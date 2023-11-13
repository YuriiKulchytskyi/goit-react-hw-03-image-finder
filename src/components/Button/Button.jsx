import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => (
  <div className='Button-wrapper'>  <button type="button" className="Button" onClick={onClick}>
  Load more
</button></div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button