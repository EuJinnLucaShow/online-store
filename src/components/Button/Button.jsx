import React from 'react'

export const Button = ({ text, color, onClick }) => {
    const myStyles = {
        background: color
    };

    return (
        <button className='btn' style={myStyles} onClick={onClick}>{text}</button>
    )
}