import { btnSliderPrev, btnSliderNext, sliderImg, sliderDots } from './variables.js';

export function mySlider() {

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


  function listSlide(elem, event) {

    elem.addEventListener('mousemove', () => {
      console.log('reset');
    })


    console.log(event.target);
  }

  slidImg.forEach(value => value.addEventListener('mousedown', (e) => listSlide(value, e)));





  // Three slider
  const sliderItem = document.querySelectorAll('.mySlider__item');
  const slideNext = document.querySelector('.mySlider__btn--next');
  const slidePrev = document.querySelector('.mySlider__btn--prev');

  let arr = [];
  sliderItem.forEach((value, index) => { (index === 1 || index === 2) && arr.push(value.offsetLeft) });
  const sum = arr.reverse().reduce((acc, value) => { acc -= value; return acc });


  let elemRight = 0;

  const getElementClick = (num) => {
    sliderItem.forEach(element => {
      element.style.right = num + 'px';
    })
  }



  slideNext.addEventListener('click', () => {
    let slideWidth = 0;
    sliderItem.forEach(value => slideWidth = value.clientWidth + (sum - value.clientWidth));

    if (elemRight !== slideWidth * (sliderItem.length - 3)) {
      getElementClick(elemRight += slideWidth)
    } else {
      getElementClick(elemRight = 0);
    }
  });


  slidePrev.addEventListener('click', () => {
    let slideWidth = 0;
    sliderItem.forEach(value => slideWidth = value.clientWidth + 20);

    if (elemRight !== 0) {
      getElementClick(elemRight -= slideWidth)
    } else {
      getElementClick(elemRight = slideWidth * (sliderItem.length - 3));
    }
  })



}


