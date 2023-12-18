import { StyledButton } from '@/styles/Controls';
import PropTypes from 'prop-types';

function ActionButton({ title, onClick, className }) {
  return (
    <div>
      <StyledButton onClick={onClick} className={`button ${className}`} />
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ActionButton.defaultProps = {
  className: null,
};

export default ActionButton;
