import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper1 = styled.div`
    position: relative;
    min-height: 140px;
    width: 100%;
    max-height: 140px;
    height: 100%;
    overflow: hidden;
    margin-bottom: 5px;
    border-radius: 5px;
`;

export const Wrapper2 = styled.div`
    width: 100%;
`;

export const Wrapper3 = styled.div`
   display:block;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Title = styled.h5`
    color: #000;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    height: 40px;
    display: flex;
    align-items: center;
`;

export const ProductCode = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    display: none;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 4px;

    svg {
        max-height: 24px;
        height: 100%;
        max-width: 124px;
        width: 100%;
        stroke-width: .3px;
    }
`;

export const Rating = styled.div`
    color: #A6A2A2;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    line-height: 11px;
`;

export const Text = styled.p`
    display: none;
`;

export const PriceWrapper = styled.div`
    text-align: left;
`

export const OldPrice = styled.div`
    display: inline-block;
    color: rgba(123, 116, 116, 0.54);
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-decoration-line: strikethrough;
    position: relative;

    &:before {
        content: '';
        width: 100%;
        height: 2px;
        background: rgba(123, 116, 116, 0.54);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
    }
`;

export const NewPrice = styled.div`
    color: #C11313;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 7px;
`;

export const BtnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductLink = styled(Link)`
    display: block;
    max-width: 276px;
    width: 100%;
    padding: 10px;
    border-radius: 9px;
    background: #D9D9D9;

    &.wide {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        max-width: 1198px;
        width: 100%;

        ${Wrapper1} {
            max-width: 210px;
            width: 100%;
            max-height: 160px;
            min-height: 160px;
            height: 100%;
        }

        ${ProductCode} {
            display: block;
        }

        ${Text} {
            display: block;
        }

        ${BtnsWrapper} {
            flex-direction: column;
            align-items: end;
            gap: 10px
        }


        ${Wrapper2} {
            width: 65%;
        }

        ${Wrapper3} {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        ${PriceWrapper} {
            text-align: right;
        }
    }
`;