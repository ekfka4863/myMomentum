// weather.js

/* navigator.geolocation.getCurrentPosition();   
- 단, 유의! 안전한 https 에서만 작동함! 
- getCurrentPosition() 메소드를 이용하면 사용자의 위치에 대한 위도와 경도값을 얻을 수 있다.

// 기본 사용 방법: 
function onGeoOk(position) {
  console.log(position);
}
function onGeoError() {
  alert("Cannot find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 콘솔창에 나오는 형태: 
  GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1640419026956}
  coords: GeolocationCoordinates {latitude: 37.6199903, longitude: 126.7474857, altitude: null, accuracy: 20.621, altitudeAccuracy: null, …}
  [[Prototype]]: GeolocationPosition
  ...

// reference:  https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
// reference:  http://tcpschool.com/html/html5_api_geolocation

*/

/* API  (reference: https://openweathermap.org/api)
-   -> api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric   
-      이때, &units=metric는 섭씨 온도로 변환하는 것을 의미
- const API_KEY = "a06f26fedd93580678cfa6cf333c469d";
-   -> api.openweathermap.org/data/2.5/weather?lat=37.6200456&lon=126.7473828&appid=a06f26fedd93580678cfa6cf333c469d&units=metric
-   -> https://api.openweathermap.org/data/2.5/weather?lat=37.6200456&lon=126.7473828&appid=a06f26fedd93580678cfa6cf333c469d&units=metric
- const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.6200456&lon=126.7473828&appid=a06f26fedd93580678cfa6cf333c469d&units=metric";
*/

// ===================================================================================================

// DOM 
const locationInfo = document.querySelector(".location_info");
const weatherInfoImg = document.querySelector(".weather_info_img");
const weatherInfo = document.querySelector(".weather_info");



// function 
// 실제로 사용할 때는 ... 
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // console.log(lat, lon);  // 37.6200456 126.7473828

  const API_KEY = "a06f26fedd93580678cfa6cf333c469d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  // https://api.openweathermap.org/data/2.5/weather?lat=37.6200456&lon=126.7473828&appid=a06f26fedd93580678cfa6cf333c469d&units=metric;
  // fetch로 API 불러오기 
  fetch(url).then((response) => response.json()).then((data) => {
    const location = data.name;
    const weather = data.weather[0].main;
    const temperature = data.main.temp;

    locationInfo.textContent = location;
    weatherInfo.textContent = `${weather}, ${temperature} °C`;
  })

}
function onGeoError() {
  alert("Cannot find your location. Allow browser access to your location to check weather.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// ===================================================================================================





