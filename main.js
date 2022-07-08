const headerItem = document.querySelectorAll('.header__item');

headerItem.forEach((element) => {
    element.addEventListener('click', (event) => {
        for (element of headerItem) {
            element.classList.remove('active');
        }

        event.target.classList.add('active');
    });
})