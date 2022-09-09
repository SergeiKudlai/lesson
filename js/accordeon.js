export function accordeon() {

  const accordeonTitle = document.querySelectorAll('[data-name = "title"]');

  accordeonTitle.forEach(elem => {
    elem.addEventListener('click', event => {
      const elem = event.target.nextElementSibling;
      const elemHeight = event.target.nextElementSibling.clientHeight;
      elemHeight === 0 ? elem.style = `height : ${elem.scrollHeight}px` : elem.style = `height : 0px`;
    })
  })
};