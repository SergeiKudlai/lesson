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

  let result = 'true';

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

  const array = newArray.map((value) => {
    const valueNum = value.join('')
    if (valueNum > 255) {
      result = 'false';
    } else if (valueNum == ' ') {
      result = 'false';
    } else if (value.length >= 2) {
      lengthFunctuin(value);
    }
    return value;
  })


  function lengthFunctuin(arr) {
    const arrFunction = arr.join('');

    if (arrFunction.at(0) === '0') {
      result = 'false';
    } else if (newArray[3].at(-1) === '0') {
      result = 'false';
      if (newArray[3].length >= 2) {
        result = 'true';
      }
    }
  }

  arr.forEach(value => {
    if (value === ' ') {
      result = 'false';
    } else if (/^[A-Za-z-\n]+$/i.test(value)) {
      result = 'false';
    } else if (value === ',') {
      result = 'false';
    }
  });

  if (str === '') {
    result = 'false';
  }

  return console.log(result);
}


export { isValidIP };