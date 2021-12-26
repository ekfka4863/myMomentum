// bgColor.js

// random bgColors  (reference: https://flatuicolors.com/palette/tr)
const bgColors = [
  "#2E1437",
  "#a399fa",
  "#ff9f1a",
  "#373B44",
  "#446270",
  "#9d50bb",
  "#6e48aa",
  "#353b48",
  "#00a046",
  "#0fb9b1",
  "#ff71b8",
  "#eb3b5a"
];

// DOM 
const bgColorBtn = document.querySelector(".change_bg_color_btn > button");
const $wrap = document.querySelector("#wrap");


// function 
function changeBgColor (e) {
  e.preventDefault();

  // random number for random bgColor
  const randomNum = Math.floor(Math.random() * bgColors.length);
  $wrap.style.backgroundColor = bgColors[randomNum];
}


// event 
bgColorBtn.addEventListener("click", changeBgColor);





