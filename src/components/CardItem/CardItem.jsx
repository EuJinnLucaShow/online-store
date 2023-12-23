import { Button } from '../Button/Button';
//import './index.css';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons';
import { ProductLink, Wrapper1, Wrapper2, Img, Title, ProductCode, RatingWrapper, Rating, Text, PriceWrapper, OldPrice, NewPrice, BtnsWrapper, Wrapper3 } from './CardItem.styled';

export const CardItem = ({wide, about}) => {
    return (
        <ProductLink to={'#'} className={wide ? 'wide' : ''}>
            <Wrapper1>
                <Img src={about.imgUrl[0]} />
            </Wrapper1>
            <Wrapper2>
                <Title>{about.nameProduct}</Title>
                <ProductCode>{`Код товару: ${about.productCode}`}</ProductCode>
                <RatingWrapper>
                    <Icons icon={'stars'}/>
                    <Rating className="product-link__rating-info">237 sold</Rating>
                </RatingWrapper>
                <Text>{about.description}</Text>
            </Wrapper2>
            <Wrapper3>
                <PriceWrapper className="product-link__price">
                    <OldPrice className="product-link__price-old">{about.price} грн</OldPrice>
                    <NewPrice className="product-link__price-new">{about.price} грн</NewPrice>
                </PriceWrapper>
                <BtnsWrapper className="product-link__btns">
                    <Button text={'Купити'} color={'#95A88F'} onClick={() => console.log('ok')}/>
                    <Button text={'В кошик'} color={'rgba(186, 188, 185, 0.72)'} onClick={() => console.log('ok')}/>
                </BtnsWrapper>
            </Wrapper3>
        </ProductLink>
    );
}


CardItem.propTypes = {
    wide: PropTypes.bool,
    about: PropTypes.object
};