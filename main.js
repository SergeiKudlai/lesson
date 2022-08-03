import { btnActive, onscroll } from './js/scroll.js';
import { counter } from './js/counter.js';
import { body } from './js/variables.js';
import { mySlider } from './js/slider.js';
import { clock } from './js/clock.js';
import { calendar } from './js/calendar.js';
import { event } from './js/event.js';


// scroll
addEventListener('scroll', onscroll);
addEventListener('scroll', btnActive);

//counter
counter();

//slider 
mySlider();

//clock
clock();

//calendar
setInterval(calendar, 10);

//event
event();

const headerItemLink = document.querySelectorAll('.header__item-link');
const submitButton = document.querySelector('.submit__btn');
const submitButtonClose = document.querySelector('.submit__close-btn');
const submitSubject = document.querySelector('.submit__subject');

// modal
submitButton.addEventListener('click', () => {
  document.querySelector('.submit__result').innerText = submitSubject.value.toString();
  document.querySelector('.submit__message-block').classList.remove('submit__message-block--active');
  body.classList.add('body--active');
});

submitButtonClose.addEventListener('click', () => {
  submitSubject.value = '';
  document.querySelector('.submit__result').innerText = ''
  document.querySelector('.submit__message-block').classList.add('submit__message-block--active');
  body.classList.remove('body--active');
})


