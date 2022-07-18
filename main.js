import { btnActive, onscroll } from './js/scroll.js';
import { counter } from './js/counter.js';
import { body } from './js/variables.js';

// scroll
addEventListener('scroll', onscroll);
addEventListener('scroll', btnActive);

//counter
counter();



const headerItemLink = document.querySelectorAll('.header__item-link');
const submitButton = document.querySelector('.submit__btn');
const submitButtonClose = document.querySelector('.submit__close-btn');
const submitSubject = document.querySelector('.submit__subject');

// modal
submitButton.addEventListener('click', () => {
  document.querySelector('.submit__result').innerText = submitSubject.value.toString();
  document.querySelector('.submit__message-block').classList.remove('submit__message-block--active');
  body.classList.add('body--active');
});

submitButtonClose.addEventListener('click', () => {
  submitSubject.value = '';
  document.querySelector('.submit__result').innerText = ''
  document.querySelector('.submit__message-block').classList.add('submit__message-block--active');
  body.classList.remove('body--active');
})





function isValidIP(str) {

  const arr = str.split('');
  let newArray = [[], [], [], []];
  let arrIndex = 0;
  const indexOne = +valueFunction().slice(0, 1);
  const indexTwo = +valueFunction().slice(1, 2);
  const indexThree = valueFunction();
  let indexThreeSum;

  if (indexThree.length === 4) {
    indexThreeSum = +indexThree.slice(2);
  } else {
    indexThreeSum = +indexThree.slice(2, 3);
  }

  if (newArray[arrIndex].length === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i === indexOne) {
        break;
      }
      newArray[arrIndex].push(arr[i]);
    }
    arrIndex = 1;
  }

  if (newArray[arrIndex].length === 0) {
    let arrIndexTwo = indexOne;

    while (arrIndexTwo < arr.length) {
      if (arrIndexTwo === indexTwo) {
        break;
      }
      if (arr[arrIndexTwo] !== '.') {
        newArray[arrIndex].push(arr[arrIndexTwo]);
      }
      arrIndexTwo++;
    }
    arrIndex++;
  }

  if (newArray[arrIndex].length === 0) {
    let arrIndexThree = indexTwo;
    for (arrIndexThree; arrIndexThree < arr.length; arrIndexThree++) {
      if (arrIndexThree === indexThreeSum) {
        break;
      }
      if (arr[arrIndexThree] !== '.') {
        newArray[arrIndex].push(arr[arrIndexThree])
      }
    }
    arrIndex++
  }

  if (newArray[arrIndex].length === 0) {
    let arrIndexFree = indexThreeSum;

    for (arrIndexFree; arrIndexFree < arr.length; arrIndexFree++) {
      if (arr[arrIndexFree] !== '.') {
        newArray[arrIndex].push(arr[arrIndexFree])
      }
    }
  }

  function valueFunction() {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '.') {
        result += arr.indexOf('.', i);
      }
    }
    return result;
  }
  valueFunction()

  let result = 'true';
  const array = newArray.map((value, index) => {

    const valueNum = value.join('')
    if (valueNum > 255) {
      result = 'false';
    } else if (valueNum == ' ') {
      result = 'false';
    } else if (valueNum[0] == 0) {
      result = 'false';
    } else if (valueNum[0]) {

    }
    return value;
  })
  // if (str === '') {
  //   result = 'false';
  // }


  arr.forEach(value => {
    if (value === ' ') {
      result = 'false';
    }
  });








  console.log(result);
}


isValidIP('11.123.204.230');


