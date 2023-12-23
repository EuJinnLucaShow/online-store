import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ text, color, onClick }) => {
    const myStyles = {
        background: color
    };

    return (
        <Btn style={myStyles} onClick={onClick}>{text}</Btn>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};