import React from 'react';
import PropTypes from 'prop-types';

const SpriteIcons = ({ icon }) => {
    const icons = {

        logo: <svg width="69" height="73" viewBox="0 0 69 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Logo">
            <path d="M3 3V70M3 3L66 70M3 3H66M3 70L66 3M3 70H66M66 3V70" stroke="#6B6666" strokeWidth="5"/>
        </g>
        </svg>,

        search: <svg width="60" height="60" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="search" d="M38.7333 38L24.0333 24.7C22.8667 25.5444 21.525 26.213 20.0083 26.7056C18.4917 27.1981 16.8778 27.4444 15.1667 27.4444C10.9278 27.4444 7.34028 26.1162 4.40417 23.4597C1.46806 20.8032 0 17.5574 0 13.7222C0 9.88704 1.46806 6.6412 4.40417 3.98472C7.34028 1.32824 10.9278 0 15.1667 0C19.4056 0 22.9931 1.32824 25.9292 3.98472C28.8653 6.6412 30.3333 9.88704 30.3333 13.7222C30.3333 15.2704 30.0611 16.7306 29.5167 18.1028C28.9722 19.475 28.2333 20.6889 27.3 21.7444L42 35.0444L38.7333 38ZM15.1667 23.2222C18.0833 23.2222 20.5625 22.2986 22.6042 20.4514C24.6458 18.6042 25.6667 16.3611 25.6667 13.7222C25.6667 11.0833 24.6458 8.84028 22.6042 6.99306C20.5625 5.14583 18.0833 4.22222 15.1667 4.22222C12.25 4.22222 9.77083 5.14583 7.72917 6.99306C5.6875 8.84028 4.66667 11.0833 4.66667 13.7222C4.66667 16.3611 5.6875 18.6042 7.72917 20.4514C9.77083 22.2986 12.25 23.2222 15.1667 23.2222Z" fill="#6B6666"/>
        </svg>,

        curt: <svg width="60" height="60" viewBox="0 0 69 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Shopping cart" d="M20.7191 64C18.8199 64 17.194 63.3733 15.8415 62.12C14.489 60.8667 13.8128 59.36 13.8128 57.6C13.8128 55.84 14.489 54.3333 15.8415 53.08C17.194 51.8267 18.8199 51.2 20.7191 51.2C22.6184 51.2 24.2443 51.8267 25.5968 53.08C26.9493 54.3333 27.6255 55.84 27.6255 57.6C27.6255 59.36 26.9493 60.8667 25.5968 62.12C24.2443 63.3733 22.6184 64 20.7191 64ZM55.251 64C53.3518 64 51.7259 63.3733 50.3734 62.12C49.0209 60.8667 48.3447 59.36 48.3447 57.6C48.3447 55.84 49.0209 54.3333 50.3734 53.08C51.7259 51.8267 53.3518 51.2 55.251 51.2C57.1503 51.2 58.7762 51.8267 60.1287 53.08C61.4812 54.3333 62.1574 55.84 62.1574 57.6C62.1574 59.36 61.4812 60.8667 60.1287 62.12C58.7762 63.3733 57.1503 64 55.251 64ZM17.7839 12.8L26.0716 28.8H50.2439L59.7402 12.8H17.7839ZM14.5034 6.4H65.438C66.7617 6.4 67.7689 6.94667 68.4595 8.04C69.1501 9.13333 69.1789 10.24 68.5458 11.36L56.287 31.84C55.6539 32.9067 54.805 33.7333 53.7403 34.32C52.6755 34.9067 51.5101 35.2 50.2439 35.2H24.5177L20.7191 41.6H62.1574V48H20.7191C18.1292 48 16.1724 46.9467 14.8487 44.84C13.525 42.7333 13.4674 40.64 14.6761 38.56L19.3379 30.72L6.90638 6.4H0V0H11.2229L14.5034 6.4Z" fill="#6B6666"/>
        </svg>,

        call: <svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M57.3784 55.6619C50.4526 55.6821 43.6059 54.3079 36.8382 51.5394C30.0705 48.7708 23.9089 44.8365 18.3533 39.7364C12.7977 34.6364 8.50102 28.9699 5.46315 22.7369C2.42528 16.504 0.897001 10.1898 0.878314 3.79457C0.875624 2.87365 1.20582 2.10524 1.8689 1.48936C2.53198 0.873467 3.36217 0.564065 4.35948 0.561151L17.8232 0.521812C18.5989 0.519545 19.2921 0.760542 19.903 1.2448C20.5139 1.72906 20.8757 2.30358 20.9885 2.96837L23.1807 13.7061C23.2939 14.5244 23.2682 15.2152 23.1037 15.7784C22.9391 16.3417 22.6358 16.8286 22.1937 17.2392L14.1541 24.7836C15.2678 26.6734 16.589 28.4986 18.1178 30.2592C19.6467 32.0199 21.3277 33.7161 23.1609 35.348C24.8831 36.929 26.6881 38.3946 28.5758 39.7449C30.4636 41.0952 32.4619 42.3301 34.5706 43.4495L42.3618 36.2128C42.8591 35.7509 43.5091 35.4036 44.3118 35.1711C45.1145 34.9385 45.9039 34.8722 46.6799 34.9723L58.1552 37.0876C58.9315 37.29 59.5697 37.659 60.07 38.1948C60.5702 38.7305 60.8213 39.3309 60.8232 39.9961L60.8595 52.4285C60.8622 53.3494 60.532 54.1178 59.869 54.7337C59.2059 55.3496 58.3757 55.659 57.3784 55.6619ZM10.9789 18.9604L16.4493 13.8793L15.0154 6.66953L7.61868 6.69115C7.90184 8.78799 8.29574 10.8589 8.80037 12.904C9.30501 14.949 10.0312 16.9678 10.9789 18.9604ZM40.8123 46.3475C42.9757 47.211 45.1801 47.8952 47.4255 48.4003C49.671 48.9054 51.9297 49.2313 54.2018 49.3782L54.1821 42.6248L46.3656 41.1895L40.8123 46.3475Z" fill="#6B6666"/>
        </svg>,

    }

  return icons[icon] || null;
}

SpriteIcons.propTypes = {
    icon: PropTypes.oneOf(['logo', 'search', 'curt', 'call']).isRequired,
    color: PropTypes.string, 
}

export default SpriteIcons;