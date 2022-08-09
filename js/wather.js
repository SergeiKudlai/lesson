export function wather() {

  const url = 'http://api.weatherstack.com/current?access_key=d8fde0f11a14cd8098be13bffd049191';
  const root = document.getElementById('root');

  let store = {
    city: 'Minsk',
    feelslike: 0,
    temperature: 0,
    observationTime: '00:00 AM',
    isDay: 'yes',
    descriptions: '',
    properties: {
      cloudcover: 0,
      humidity: 0,
      windSpeed: 0,
      visibility: 0,
      pressure: 0,
      uvIndex: 0
    }
  }

  const getRenderComponent = () => root.innerHTML = markup();

  async function getFetchData() {

    const response = await fetch(`${url}&query=${store.city}`);
    const data = await response.json();
    console.log(data);
    const {
      current: { feelslike, cloudcover, temperature, humidity, observation_time: time, pressure, uv_index, visibility, is_day: day, weather_descriptions, wind_speed: wind },
    } = data;

    store = {
      ...store,
      feelslike,
      cloudcover,
      temperature,
      humidity,
      observationTime: time,
      pressure,
      uvIndex: uv_index,
      visibility,
      isDay: day,
      descriptions: weather_descriptions[0],
      windSpeed: wind,
      properties: {

      }
    }

    getRenderComponent();
  };



  const getImage = (descriptions) => {
    const value = descriptions.toLowerCase();

    switch (value) {
      case 'overcast':
        return 'partly.png';
      case 'cloud':
        return 'cloud.png';
      case 'fog':
        return 'fog.png';
      case 'sunny':
        return 'sunny.png';
      default:
        return 'the.png';
    }
  }


  const markup = () => {

    const { city, temperature, descriptions, observationTime , isDay} = store;

    
    const containerClass = isDay === 'yes' ? is-day : '';


    return `<div class="containerr ${containerClass}">
              <div class="top">
                <div class="city">
                  <div class="city-subtitle">Weather Today in</div>
                    <div class="city-title" id="city">
                    <span>${city}</span>
                  </div>
                </div>
                <div class="city-info">
                  <div class="top-left">
                  <img class="icon" src="./img/wather/${getImage(descriptions)}" alt="" />
                  <div class="description">${descriptions}</div>
                </div>
              
                <div class="top-right">
                  <div class="city-info__subtitle">as of ${observationTime}</div>
                  <div class="city-info__title">${temperature}°</div>
                </div>
              </div>
            </div>
          <div id="properties"></div>
        </div>`;
  };

  getFetchData();
}

