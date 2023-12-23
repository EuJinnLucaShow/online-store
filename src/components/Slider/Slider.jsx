import { SliderWrapper, StyledSlider } from "./Slider.styled";
import image from '../../assets/slider/image1.png'

export const MySlider = () => {
    return (
        <SliderWrapper>
            <StyledSlider>
                <div className='slider__item'>
                    <img src={image} alt='img' />
                </div>
                <div className='slider__item'>
                    <img src={image} alt='img' />
                </div>
            </StyledSlider>
        </SliderWrapper>
    );
}