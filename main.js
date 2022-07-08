const headerItem = document.querySelectorAll('.header__item');
const submitButton = document.querySelector('.submit__btn');
const submitButtonClose = document.querySelector('.submit__close-btn');
const submitSubject = document.querySelector('.submit__subject');


headerItem.forEach((element) => {
    element.addEventListener('click', (event) => {
        for (element of headerItem) {
            element.classList.remove('header__item--active');
        }

        event.target.classList.add('header__item--active');
    });
})

submitButton.addEventListener('click', () => {
    document.querySelector('.submit__result').innerText = submitSubject.value.toString();;
    document.querySelector('.submit__message-block').classList.remove('submit__message-block--active');
});

submitButtonClose.addEventListener('click', () => {
    submitSubject.value = '';
    document.querySelector('.submit__result').innerText = '';
    document.querySelector('.submit__message-block').classList.add('submit__message-block--active');
})


