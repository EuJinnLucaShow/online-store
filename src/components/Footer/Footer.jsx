import { Link } from "react-router-dom";
import SpriteIcons from "../../assets/footer/SpriteIcons";
import './index.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__top-items">
                        <Link to={'/'} className="footer__logo">
                            <SpriteIcons icon="logo"/>
                            <span>Звукоряд</span>
                        </Link>
                        <div className="footer__category">
                            <div>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                            </div>
                            <div>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                                <Link to={'#'}>Category</Link>
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <a href="tel:602-579-5633">602-579-5633</a>
                            <a href="tel:602-579-5633">602-579-5633</a>
                            <a href="tel:602-579-5633">602-579-5633</a>
                            <div className="footer__contacts__messengers">
                                <Link to={'#'}><SpriteIcons icon="messengers"/></Link>
                                <Link to={'#'}><SpriteIcons icon="messengers"/></Link>
                                <Link to={'#'}><SpriteIcons icon="messengers"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>
                        Команда розробки: Rogelio Schroeder, Connie Ortiz, Michelle Feil,Rogelio Schroeder, Connie Ortiz, Michelle Feil,Rogelio Schroeder, Connie Ortiz, Michelle Feil,
                    </p>
                    <p>DATAtime 28/09/76 version ****</p>
                </div>
            </div>
        </footer>
    );
}
