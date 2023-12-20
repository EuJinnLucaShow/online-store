import { NavLink } from 'react-router-dom';
import icon from '../../assets/icon.svg'
import './index.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__item">
                    <div className="header__logo">
                        <svg ><use xlinkHref={`${icon}#icon-logo`}></use></svg>
                         <NavLink to="/">
                            <span>Sound Line</span>
                        </NavLink>
                    </div>
                    <NavLink to="/catalog" className="header__catalog">Каталог</NavLink>
                </div>
                <div className="header__input">
                    <input type="text" placeholder='Що ви шукаєте?'/>
             <svg ><use xlinkHref={`${icon}#icon-search`}></use></svg>
                    <button>Пошук</button>
                </div>
                <div className="header__curt">
<svg ><use xlinkHref={`${icon}#icon-shopping-cart`}></use></svg>
                </div>
                <div className='header__call'>
<svg ><use xlinkHref={`${icon}#icon-phone`}></use></svg>
                </div>
            </div>
        </header>
    )
}
