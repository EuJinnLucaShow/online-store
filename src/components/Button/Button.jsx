import PropTypes from 'prop-types';

export const Button = ({ text, color, onClick }) => {
    const myStyles = {
        background: color
    };

    return (
        <button className='btn' style={myStyles} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};