import { SliderWrapper, StyledSlider } from "./Slider.styled";

export const MySlider = () => {
    return (
        <SliderWrapper>
            <StyledSlider>
                <div className='slider__item'>
                    <img src='../../../src/assets/slider/image1.png' alt={'img'} />
                </div>
                <div className='slider__item'>
                    <img src='../../../src/assets/slider/image1.png' alt={'img'} />
                </div>
            </StyledSlider>
        </SliderWrapper>
    );
}