const aboutButtons = document.querySelectorAll('.aboutButtons__btn');
const aboutContent = document.querySelectorAll('.aboutText__item');


aboutButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    let targetActive = event.target;

    for (let el of aboutButtons) {
      el.classList.remove('aboutButtons__btn--active');
    }
    element.classList.add('aboutButtons__btn--active');
    dataFunction(targetActive);
  });
});


const dataFunction = (elemTraget) => {
  let dataTraget = elemTraget.dataset.btn;

  for (let el of aboutContent) {
    const dataText = el.dataset.text;

    if (dataTraget === dataText) {
      el.classList.add('aboutText__item--active')
    } else {
      el.classList.remove('aboutText__item--active')
    }
  }
};  