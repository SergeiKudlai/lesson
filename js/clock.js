import { clockSpan } from './variables.js'

function clock() {
  setInterval(() => {
    const date = new Date();

    let dateHorse = date.getHours();
    let dateMinuts = date.getMinutes();
    let dateSeconds = date.getSeconds();

    if (dateHorse < 10) {
      dateHorse = '0' + dateHorse;
    } else if (dateMinuts < 10) {
      dateMinuts = '0' + dateMinuts;
    } else if (dateSeconds < 10) {
      dateSeconds = '0' + dateSeconds;
    }

    const format = [dateHorse, dateMinuts, dateSeconds].join(':');

    clockSpan.innerHTML = format;
  }, 10);
};

export { clock };