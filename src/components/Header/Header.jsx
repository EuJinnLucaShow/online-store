import { NavLink } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './index.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__item">
          <div className="header__logo">
            <NavLink to="/">
              <svg>
                <use href={`${icon}#icon-logo`}></use>
              </svg>
            </NavLink>
            <span>Звукоряд</span>
          </div>
          <NavLink to="/catalog" className="header__catalog">
            Каталог
          </NavLink>
        </div>
        <div className="header__input">
          <input type="text" placeholder="Що ви шукаєте?" />
          <svg>
            <use href={`${icon}#icon-search`}></use>
          </svg>
          <button>Пошук</button>
        </div>
        <div className="header__curt">
          <svg>
            <use href={`${icon}#icon-shopping-cart`}></use>
          </svg>
        </div>
        <div className="header__call">
          <svg>
            <use href={`${icon}#icon-phone`}></use>
          </svg>
        </div>
      </div>
    </header>
  );
};
