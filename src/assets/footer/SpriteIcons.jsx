import React from 'react';
import PropTypes from 'prop-types';

const SpriteIcons = ({ icon }) => {
    const icons = {

        logo: <svg width="69" height="73" viewBox="0 0 69 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Logo">
            <path d="M3 3V70M3 3L66 70M3 3H66M3 70L66 3M3 70H66M66 3V70" stroke="#342D2D" strokeWidth="5"/>
        </g>
        </svg>,

        messengers: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="messengers" d="M9.77778 34.2222H19.5556V24.4444H9.77778V34.2222ZM24.4444 34.2222H34.2222V24.4444H24.4444V34.2222ZM9.77778 19.5556H19.5556V9.77778H9.77778V19.5556ZM24.4444 19.5556H34.2222V9.77778H24.4444V19.5556ZM4.88889 44C3.54444 44 2.39352 43.5213 1.43611 42.5639C0.478704 41.6065 0 40.4556 0 39.1111V4.88889C0 3.54444 0.478704 2.39352 1.43611 1.43611C2.39352 0.478704 3.54444 0 4.88889 0H39.1111C40.4556 0 41.6065 0.478704 42.5639 1.43611C43.5213 2.39352 44 3.54444 44 4.88889V39.1111C44 40.4556 43.5213 41.6065 42.5639 42.5639C41.6065 43.5213 40.4556 44 39.1111 44H4.88889ZM4.88889 39.1111H39.1111V4.88889H4.88889V39.1111Z" fill="#342D2D"/>
        </svg>,

    }

  return icons[icon] || null;
}

SpriteIcons.propTypes = {
    icon: PropTypes.oneOf(['logo', 'messengers']).isRequired,
}

export default SpriteIcons;