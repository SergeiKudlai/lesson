import { form } from './variables.js';

function event() {
  let formData = {};
  const ls = localStorage;

  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    ls.setItem('Data', JSON.stringify(formData));
  })

  if (ls.getItem('Data')) {
    formData = JSON.parse(ls.getItem('Data'));

    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
























}


export { event };