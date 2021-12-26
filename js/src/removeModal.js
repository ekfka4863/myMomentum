// removeModal.js

// DOM 
const removeModalBtn = document.querySelector(".remove_modal_btn > button");
const mainConLeftSide = document.querySelector(".main_con_left_side");
// const dateLocationWeather = document.querySelector(".date_location_weather");
const musicPlayerPart = document.querySelector(".music_player_part");

const clock = document.querySelector(".clock");


// function 
function removeModal() {
  mainConLeftSide.style.opacity = "0";
  console.log("clicked");

  moveClock();
  musicPlayerPartBg();
}

function moveClock() {
  clock.style.position = "absolute";
  clock.style.top = "160px";
  clock.style.left = "110px";
}

function musicPlayerPartBg() {
  const musicPlayerPartBg = document.createElement("div");
  musicPlayerPart.appendChild(musicPlayerPartBg);
  musicPlayerPartBg.classList.add("music_player_part_bg");
  musicPlayerPartBg.style.display = "block";

  // 위치 조절 
  musicPlayerPart.style.top = "535px";
}



// event 
removeModalBtn.addEventListener("click", removeModal);