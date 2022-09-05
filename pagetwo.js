const sectionsPage = document.querySelectorAll('.section');
const headerHeight = document.querySelector('.header');
const headerLinks = document.querySelectorAll('.header__item-link');
const headerItemsLi = document.querySelectorAll('.header__item');

window.addEventListener('scroll', () => {
  let scrollPageY = Math.floor(window.scrollY);

  sectionsPage.forEach((elem) => {
    if (elem.offsetTop - headerHeight.clientHeight <= scrollPageY) {
      headerLinks.forEach(value => {
        value.classList.remove('header__item-link--active');

        if (elem.getAttribute('id') === value.getAttribute('href').substring(1)) {
          value.classList.add('header__item-link--active');
        }
      })
    }
  })
})


