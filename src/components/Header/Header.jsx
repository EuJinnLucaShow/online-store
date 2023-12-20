import { NavLink } from 'react-router-dom';
import './index.css';
import SpriteIcons from '../../assets/header/SpriteIcons';

export const Header = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__item">
                    <div className="header__logo">
                        <SpriteIcons className="logo" icon={'logo'} />
                        <NavLink to="/">
                            <span>Звукоряд</span>
                        </NavLink>
                    </div>
                    <NavLink to="/catalog" className="header__catalog">Каталог</NavLink>
                </div>
                <div className="header__input">
                    <input type="text" placeholder='Що ви шукаєте?'/>
                    <SpriteIcons icon="search"/>
                    <button>Пошук</button>
                </div>
                <div className="header__curt">
                    <SpriteIcons icon="curt"/>
                </div>
                <div className='header__call'>
                    <SpriteIcons icon="call" />
                </div>
            </div>
        </header>
    );
}