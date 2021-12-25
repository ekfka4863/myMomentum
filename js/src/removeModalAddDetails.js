// removeModalAddDetails.js



// DOM 
const removeModalBtn = document.querySelector(".remove_modal_btn > button");
// const mainConRightSide = document.querySelector(".main_con_right_side");
const dateLocationWeather = document.querySelector(".date_location_weather");
const musicPlayerPart = document.querySelector(".music_player_part");

const clock = document.querySelector(".clock");

// function 
function removeModal() {
  mainConRightSide.style.opacity = "0";
  console.log("clicked");

  moveClock();
}

function moveClock() {
  clock.style.position = "absolute";
  clock.style.top = "70px";
  clock.style.left = "190px";
}

function showMiniMusicPlayer () {
  // musicPlayerPart.display.opacity = "1";
  // 따로 분리 필요 ...!? 
}

// event 
removeModalBtn.addEventListener("click", removeModal);