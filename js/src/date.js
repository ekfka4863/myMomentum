// date.js

/* logic 구현
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

const dateObj = new Date();
const month = monthNames[dateObj.getMonth()];  // 11 -> "December"
// console.log(month);

// console.log(dateObj.getDate()); // number ->  25
const day = String(dateObj.getDate()).padStart(2, '0'); // cf. padStart의 첫번째 인자로 오는 만큼의 자릿수를 갖는다 (+ 그리고 문자열 메서드이다). 만약 근데 지금 날짜가 7일이라고 하면 그럼 반환되는 day는 "07"이 되는 것!
// console.log(day);    // string ->  "25"

const year = dateObj.getFullYear();
// console.log(year);   // 2021

// reference:  
https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

*/

// DOM 
const dateInfo = document.querySelector(".date_info");


// function 
function setDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();

  const month = monthNames[dateObj.getMonth()];  
  const day = String(dateObj.getDate()).padStart(2, '0'); 
  const year = dateObj.getFullYear();

  dateInfo.textContent = `${month} ${day}, ${year}`;
}

setDate();