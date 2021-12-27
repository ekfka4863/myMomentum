// clock.js

// DOM
const $clock = document.querySelector(".clock");
const clockBefore = window.getComputedStyle($clock, "::before");
// console.log(typeof clockBefore);   // object
// console.log(clockBefore["content"]); // ""
const $clockDisplay = document.querySelector(".clock_display");


// function 
function getTime() {
  setInterval(() => {
    const date = new Date();
    let hr = date.getHours();  // 0 ~ 23사이의 정수를 반환
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // console.log(hr, min, sec);
  
    (hr < 10) ? (hr = '0' + hr) : hr;
    (min < 10) ? (min = '0' + min) : min;
    (sec < 10) ? (sec = '0' + sec) : sec;
  
    // console.log(`${hr} : ${min} : ${sec}`);
    $clockDisplay.textContent = `${hr}:${min}:${sec}`;
    
    // switch (hr) {
    //   case 0 || 12:
        
    //     break;
    //   case 1 || 13:
        
    //     break;
    //   case 2 || 14:
        
    //     break;
    //   case 3 || 15:
        
    //     break;
    //   case 4 || 16:
        
    //     break;
    //   case 5 || 17:
        
    //     break;
    //   case 6 || 18:
        
    //     break;
    //   case 7 || 19:
        
    //     break;
    //   case 8 || 20:
        
    //     break;
    //   case 9 || 21:
        
    //     break;
    //   case 10 || 22:
        
    //     break;
    //   case 11 || 23:
        
    //     break;
    //   default:
    //     // clip-path: inset(0 0 0 0)
    //     break;
    // }
    
  }, 1000);
}


// event
getTime();



// reference:  https://www.plus2net.com/javascript_tutorial/clock.php
