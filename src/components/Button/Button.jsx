import PropTypes from 'prop-types';
import { StyledButton } from './ButtonStyles'


const Button = ({children, onClick}) => {
    return (
      <StyledButton type="button" onClick={onClick}>
        {children}
      </StyledButton>
    );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;