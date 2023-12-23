import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledSlider = styled(Slider)`
    .slick-prev {
        left: 12px;
    }

    .slick-next {
        top: 50%;
        transform: translateY(-50%) rotate(-180deg);

        right: 12px;
    }

    .slick-prev,
    .slick-next {
        height: 54px;
        width: 36px;
        z-index: 10;

        &:before {
            content: '';
            width: 100%;
            height: 4px;
            background: #000;
            position: absolute;
            left: 0;
            top: 24%;
            transform: rotate(-45deg);
        }

        &:after {
            content: '';
            width: 100%;
            height: 4px;
            background: #000;
            position: absolute;
            left: 0;
            bottom: 24%;
            transform: rotate(45deg);
        }
    }
`;