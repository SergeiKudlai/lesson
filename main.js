import { btnActive, onscroll } from './js/scroll.js';
import { counter } from './js/counter.js';

// scroll
addEventListener('scroll', onscroll);
addEventListener('scroll', btnActive);

//counter
counter();


const headerItemLink = document.querySelectorAll('.header__item-link');
const submitButton = document.querySelector('.submit__btn');
const submitButtonClose = document.querySelector('.submit__close-btn');
const submitSubject = document.querySelector('.submit__subject');


// click active menu
headerItemLink.forEach((element) => {
  element.addEventListener('click', (event) => {
    for (element of headerItemLink) {
      element.classList.remove('header__item-link--active'); File
    }
    event.target.classList.add('header__item-link--active');
  });
})

// modal
submitButton.addEventListener('click', () => {
  document.querySelector('.submit__result').innerText = submitSubject.value.toString();
  document.querySelector('.submit__message-block').classList.remove('submit__message-block--active');
});

submitButtonClose.addEventListener('click', () => {
  submitSubject.value = '';
  document.querySelector('.submit__result').innerText = ''
  document.querySelector('.submit__message-block').classList.add; ('submit__message-block--active');
})







