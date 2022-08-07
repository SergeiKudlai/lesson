export function getFetch() {

  const video = document.querySelector('.video');

  async function getUserVideo() {
    try {
      const response = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = response;
    } catch (error) {
      console.error(`Error >> ${error}`);
    }
  };

  getUserVideo();


  const url1 = 'https://jsonplaceholder.typicode.com/users';
  const url2 = 'https://jsonplaceholder.typicode.com/todos/1';

  async function getUrlData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Errror >> ${error}`);
    }
  }

  getUrlData(url1).then(value => console.log(value));
  getUrlData(url2).then(value => console.log(value));





}