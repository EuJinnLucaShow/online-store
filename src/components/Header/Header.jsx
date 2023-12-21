import { NavLink } from 'react-router-dom';
import Icons from '../Icons/Icons';
import './index.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__item">
          <div className="header__logo">
            <NavLink to="/">
              <Icons icon="logo" />
            </NavLink>
            <span>Звукоряд</span>
          </div>
          <NavLink to="/catalog" className="header__catalog">
            Каталог
          </NavLink>
        </div>
        <div className="header__input">
          <input type="text" placeholder="Що ви шукаєте?" />
          <Icons icon="search" />
          <button>Пошук</button>
        </div>
        <div className="header__curt">
          <Icons icon="shopping" />
        </div>
        <div className="header__call">
          <Icons icon="phone" />
        </div>
      </div>
    </header>
  );
};
