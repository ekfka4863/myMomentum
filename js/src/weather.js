// weather.js

// lon & lan
// navigator.geolocation.getCurrentPosition();   // 유의! 안전한 https 에서만 작동함 
const successCallback = (position) => {
  console.log(position);
};
const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);  


// reference:  https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

// API 
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
// 이때, &units=metric는 섭씨 온도로 변환하는 것을 의미
// api key --> a06f26fedd93580678cfa6cf333c469d
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a06f26fedd93580678cfa6cf333c469d}&units=metric

// DOM 


// function 
// const getApi = function () {
//   fetch('')
// };


// event 



