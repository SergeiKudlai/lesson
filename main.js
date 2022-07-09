const headerItemLink = document.querySelectorAll('.header__item-link');
const submitButton = document.querySelector('.submit__btn');
const submitButtonClose = document.querySelector('.submit__close-btn');
const submitSubject = document.querySelector('.submit__subject');
const allSection = document.querySelectorAll('.section');
const sectionPortfolio = document.querySelector('.Portfolio');
const mainBtn = document.querySelector('.main__btn');

// click active menu
headerItemLink.forEach((element) => {
  element.addEventListener('click', (event) => {
    for (element of headerItemLink) {
      element.classList.remove('header__item-link--active');
    }
    event.target.classList.add('header__item-link--active');
  });
})

submitButton.addEventListener('click', () => {
  document.querySelector('.submit__result').innerText = submitSubject.value.toString();;
  document.querySelector('.submit__message-block').classList.remove('submit__message-block--active');
});

submitButtonClose.addEventListener('click', () => {
  submitSubject.value = '';
  document.querySelector('.submit__result').innerText = '';
  document.querySelector('.submit__message-block').classList.add; ('submit__message-block--active');
})

// scroll
addEventListener('scroll', onscroll);
addEventListener('scroll', btnActive);


function onscroll() {

  const pageCur = window.pageYOffset;
  allSection.forEach((element) => {

    if (element.offsetTop <= pageCur && (element.offsetTop + element.offsetHeight) > pageCur) {

      for (let el of headerItemLink) {
        el.classList.remove('header__item-link--active');

        if (element.getAttribute('id') === el.getAttribute('href').substring(1)) {
          el.classList.add('header__item-link--active');
        }
      }
    }
  });
}

//button scrollUP
function btnActive() {
  const pageCur = window.scrollY;
  pageCur > 200 ? mainBtn.classList.remove('main__btn--active') : mainBtn.classList.add('main__btn--active');
}

mainBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});