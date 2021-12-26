// clock.js

// DOM
// const $clock = document.querySelector(".clock");
const $clockDisplay = document.querySelector(".clock_display");


// function 
function getTime() {
  setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // console.log(hr, min, sec);
  
    (hr < 10) ? (hr = '0' + hr) : hr;
    (min < 10) ? (min = '0' + min) : min;
    (sec < 10) ? (sec = '0' + sec) : sec;
  
    // console.log(`${hr} : ${min} : ${sec}`);
    $clockDisplay.textContent = `${hr}:${min}:${sec}`;
  }, 1000);
}


// event
getTime();



// reference:  https://www.plus2net.com/javascript_tutorial/clock.php
