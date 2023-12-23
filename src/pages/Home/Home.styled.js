import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export const CardsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 auto 20px;
    max-width: 1164px;
    width: 100%;
    flex-wrap: wrap;
`;

export const Text = styled.p`
    display: block;
    width: 1520px;
    margin: 0 auto;
    color: #000;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    line-height: normal;
`;

export const SliderWrapper = styled.div`
    max-width: 1232px;
    width: 100%;
    margin: 0 auto;
`;

export const LinkWrapper = styled.div`
    padding: 30px 0 15px;
    text-align: center;
`

export const LinkTo = styled(Link)`
    border-radius: 25px;
    background: #D9D9D9;
    padding: 5px 11px;
`;