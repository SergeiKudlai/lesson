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

  // Two Slider

  const btnPrev = document.querySelector('.twoSlider__btn-button--prev');
  const btnNext = document.querySelector('.twoSlider__btn-button--next');
  const slideItems = document.querySelectorAll('.twoSlider__item');
  const slidImg = document.querySelectorAll('.twoSlider__img');

  let offset = 0;

  function getSlidPrev(value) {
    for (let item of slideItems) {
      item.style.right = value + 'px';
    }
  }

  btnNext.addEventListener('click', () => {
    let slideWidth;
    slidImg.forEach(value => slideWidth = value.width)

    if (offset !== slideWidth * (slidImg.length - 1)) {
      offset += slideWidth;
      getSlidPrev(offset);
    } else {
      offset = 0;
      getSlidPrev(offset);
    }
  });

  btnPrev.addEventListener('click', () => {
    let slideWidth;
    slidImg.forEach(value => slideWidth = value.width)

    if (offset !== 0) {
      offset -= slideWidth;
      getSlidPrev(offset);
    } else {
      offset = slideWidth * (slidImg.length - 1);
      getSlidPrev(offset);
    }
  });
}

export { mySlider };
