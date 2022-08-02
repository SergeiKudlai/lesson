import { calendarSpan1, calendarSpan2 } from './variables.js';

function calendar() {
  const theDate = new Date()
  const monts = `./img/monts/${theDate.getMonth()}.gif`;
  const days = [];

  // calendarSpan.innerHTML = `<img src="${monts}">`;



  calendarSpan1.innerHTML = `<img src="./img/numbers/1.gif">`;
  calendarSpan2.innerHTML = `<img src="./img/numbers/2.gif">`;
};


export { calendar };