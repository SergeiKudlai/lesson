import { calendarOne, calendarTwo, calendarMonts } from './variables.js';

function calendar() {
  const theDate = new Date()
  const monts = `./img/monts/${theDate.getMonth()}.gif`;
  const days = `./img/numbers/${theDate.getDate()}.gif`;

  calendarMonts.innerHTML = `<img src="${monts}">`;

  if (theDate.getDate() >= 10) {
    const date = theDate.getDate();
    const arr = [...'' + date].map(Number);
    calendarOne.innerHTML = `<img src="./img/numbers/${arr[0]}.gif">`
    calendarTwo.innerHTML = `<img src="./img/numbers/${arr[1]}.gif">`
  } else {
    calendarOne.innerHTML = `<img src="${days}">`
  };
};

export { calendar };