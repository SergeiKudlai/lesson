import * as vars from './variables.js';

function counter() {

  const Counter = function () {
    this.count = 0;
    this.increase = function () {
      this.count--;
    }
    this.increaseNext = function () {
      this.count++;
    }
  }

  for (let i = 0; i < vars.contactBtn.length; i++) {
    const counter = new Counter();
    const currentBtn = vars.contactBtn[i];
    const currentBtnNext = vars.contactBtnNext[i];
    const currentSpan = vars.contactSpan[i];
    currentSpan.innerHTML = counter.count;


    function examination() {
      currentBtn.disabled = false;
      if (counter.count <= 0) {
        currentBtn.disabled = true;
      }
    }
    examination();

    currentBtnNext.addEventListener('click', () => {
      counter.increaseNext();
      currentSpan.innerHTML = counter.count;
      examination();
    })

    currentBtn.addEventListener('click', () => {
      counter.increase();
      currentSpan.innerHTML = counter.count;
      examination();
    })
  }

















}
export { counter };