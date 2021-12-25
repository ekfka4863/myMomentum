// calender.js


// DOM 
const calenderPart = document.querySelector(".calender_part");
const calenderMonthH4 = document.querySelector(".calender_part h4");
const calenderWeekdaysUl = document.querySelector(".calender_weekdays");
const calenderDaysUl = document.querySelector(".calender_days");

// function 
function setMonthYear () {
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  
  const dateObj = new Date();

  const monthName = monthNames[dateObj.getMonth()];  
  const year = dateObj.getFullYear();

  calenderMonthH4.textContent = `${monthName} ${year}`;
}


function setWeekdays () {
  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (let i = 0; i < weekNames.length; i++) {
    const weekDayLi = document.createElement("li");
    weekDayLi.textContent = `${weekNames[i]}`;
    calenderWeekdaysUl.appendChild(weekDayLi);
  }
}


function setDays () {
  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const dateObj = new Date();

  const year = dateObj.getFullYear();
  const month =dateObj.getMonth();  
  const day = dateObj.getDate(); 

  // console.log(year);  // 2021
  // console.log(month);  // 11
  // console.log(day);  // 26

  const lastDayOfMonth = new Date(year, month, 0).getDate();   //  reference: https://bloodguy.tistory.com/entry/JavaScript-%ED%8A%B9%EC%A0%95-%EB%85%84%EC%9B%94%EC%9D%98-%EB%A7%88%EC%A7%80%EB%A7%89-%EB%82%A0%EC%A7%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-get-last-day-of-month
  // console.log(lastDayOfMonth);  // 30

  // const firstDayOfMonth = new Date(year, month, 1).getDate();  // 이거 응용해서 ... 아래꺼!
  const firstDayOfMonth = new Date(year, month, 1).getDay();   
  // console.log(firstDayOfMonth);  // 3
  // console.log(weekNames[firstDayOfMonth]);  // Thu
  // const firstDayOfMonthWeekName = weekNames[firstDayOfMonth];

  let dayCount = 1;

  for (let i = 0; i < (lastDayOfMonth + firstDayOfMonth); i++) {
    const dayLi = document.createElement("li");
    calenderDaysUl.appendChild(dayLi);

    if (i > firstDayOfMonth - 1) {   // cf. Thu부터 시작해야 하니까 -1!
      dayLi.textContent = `${dayCount}`;
      dayCount++;
    }


    // add css class
    if (dayCount - 1 === day) {   // cf. 지금 생성중인 날짜가 오늘의 날짜인 day와 같으면 ... 하이라이트하는 css class 추가! 다만, day는 0부터 시작해서 ... daycount에 -1을 해서 e.g. 26일인데 하이라이트는 25일에 되는 불상사를 막는다.
      // console.log(dayCount);  // 26
      // console.log(day);         // 26

      dayLi.classList.add("hightlight_today");
    }
  }
}



// call functions
setMonthYear();
setWeekdays();
setDays();