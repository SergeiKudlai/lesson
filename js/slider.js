import { btnSliderPrev, btnSliderNext, sliderImg, sliderDots } from './variables.js';

function mySlider() {

  let index = 0;

  function slidesIndexActive(indexValue) {
    for (let slide of sliderImg) {
      slide.classList.remove('slider__item--active');
    }
    sliderImg[indexValue].classList.add('slider__item--active');
  }

  function sliderDotsActive(dotsActive) {
    for (let dots of sliderDots) {
      dots.classList.remove('slider__dots-item--active')
    }
    sliderDots[dotsActive].classList.add('slider__dots-item--active')
  }

  const prepareSlideActive = i => {
    slidesIndexActive(i);
    sliderDotsActive(i);
  }

  function slideActivePrev() {
    if (index === 0) {
      index = sliderImg.length - 1
      prepareSlideActive(index);
    } else {
      index--;
      prepareSlideActive(index);
    }
  }

  function slideActiveNext() {
    if (index === sliderImg.length - 1) {
      index = 0;
      prepareSlideActive(index);
    } else {
      index++;
      prepareSlideActive(index);
    }
  }

  sliderDots.forEach((value, indexDot) => {
    value.addEventListener('click', () => {
      index = indexDot;
      prepareSlideActive(index);
    })
  });

  btnSliderPrev.addEventListener('click', slideActivePrev);
  btnSliderNext.addEventListener('click', slideActiveNext);
}

export { mySlider };
