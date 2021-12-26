// removeModal.js

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
  musicPlayerPartBg();
}

function moveClock() {
  clock.style.position = "absolute";
  clock.style.top = "70px";
  clock.style.left = "190px";
}

function musicPlayerPartBg() {
  const musicPlayerPartBg = document.createElement("div");
  musicPlayerPart.appendChild(musicPlayerPartBg);
  musicPlayerPartBg.classList.add("music_player_part_bg");
  musicPlayerPartBg.style.display = "block";

  // 위치 조절 
  musicPlayerPart.style.top = "660px";
}



// event 
removeModalBtn.addEventListener("click", removeModal);