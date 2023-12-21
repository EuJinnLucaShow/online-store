import icon from '../../assets/icon.svg';
import { Button } from '../Button/Button';
import './index.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProductItemLink = ({wide}) => {
    return (
        <Link to={'#'} className={wide ? 'product-link wide' : 'product-link'}>
            <div className="product-link__img">
                <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" alt="" />
            </div>
            <div className="product-link__wrapper">
                <h5 className="product-link__title">
                    Qui enim necessitatibus voluptatibus rerum illum ut.
                </h5>
                <div className="product-link__code">{`Код товару: ${'52466'}`}</div>
                <div className="product-link__rating">
                    <svg>
                        <use href={`${icon}#icon-rating`}></use>
                    </svg>
                    <div className="product-link__rating-info">237 sold</div>
                </div>
                <p className='product-link__text'>
                    Sint voluptas ut quod. Consequatur adipisci quasi doloremque molestias error assumenda eveniet nostrum. Dolorum rerum nisi. Commodi sapiente quo ducimus aperiam. Rerum aut quis magnam sit delectus non quis dignissimos amet. Aut nesciunt occaecati. Illum magnam nihil voluptas. Consectetur et magni id nobis culpa ad nulla quia aut. Alias quae adipisci laborum itaque rerum enim. Et ea nemo ipsam dolor quod. Hic libero non debitis reiciendis ut.
                </p>
            </div>
            <div className="product-link__wrapper">
                <div className="product-link__price">
                    <p className="product-link__price-old">23 490 грн</p>
                    <p className="product-link__price-new">20 490 грн</p>
                </div>
                <div className="product-link__btns">
                    <Button text={'Купити'} color={'#95A88F'} onClick={() => console.log('ok')}/>
                    <Button text={'В кошик'} color={'rgba(186, 188, 185, 0.72)'} onClick={() => console.log('ok')}/>
                </div>
            </div>
        </Link>
    );
}


ProductItemLink.propTypes = {
    wide: PropTypes.bool,
};