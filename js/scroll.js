//button scrollUP
const mainBtn = document.querySelector('.main__btn');
const allSection = document.querySelectorAll('.section');
const headerItemLink = document.querySelectorAll('.header__item-link');

function btnActive() {
  const pageCur = window.scrollY;
  pageCur > 200 ? mainBtn.classList.remove('main__btn--active') : mainBtn.classList.add('main__btn--active');
}

mainBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


// page scroll
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

export { btnActive, onscroll };
