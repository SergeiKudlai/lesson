export function slidePart1() {
  const sliderInner = document.querySelector('.part1__inner');

  sliderInner.addEventListener('click', e => {
    const { target } = e;

    if (target.closest('.part1__img')) {
      const sliderItems = sliderInner.querySelectorAll('.part1__slide');
      sliderItems.forEach(elem => {
        elem.classList.remove('part1__slide--active');
      })

      target.closest('.part1__slide').classList.add('part1__slide--active');
    }
  })
}