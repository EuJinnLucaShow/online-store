import { SliderWrapper, StyledSlider } from './Slider.styled';
import image from '../../assets/image.png';

export const MySlider = () => {
  return (
    <SliderWrapper>
      <StyledSlider>
        <div className="slider__item">
          <img src={image} alt="img" />
        </div>
        <div className="slider__item">
          <img src={image} alt="img" />
        </div>
      </StyledSlider>
    </SliderWrapper>
  );
};
