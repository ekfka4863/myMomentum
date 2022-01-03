// removeModalAddDetails.js


// DOM 
const removeModalBtn = document.querySelector(".remove_modal_btn > button");
const mainConLeftSide = document.querySelector(".main_con_left_side");
const musicPlayerPart = document.querySelector(".music_player_part");

const mainBgBox = document.querySelector("#mainBgBox");
const mainBgBoxDetails = document.querySelector(".main_bg_box_details");

const clock = document.querySelector(".clock");

const todoPart = document.querySelector(".todolist_part");
const todoForm = todolistPart.querySelector("form");
const todoInput = todolistPart.querySelector("form > input");
const todoUl = document.querySelector(".todos");



// function 
function removeModal() {
  mainConLeftSide.style.opacity = "0";

  moveClock();
  musicPlayerPartBg();
  showAim();
  addDetails();
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


// add an aim  
function showAim () {
  const aim = document.createElement("p");

  aim.textContent = "const myAim = function() {while (!Success) { tryAgain(); if (Dead) break; }};";
  mainBgBox.prepend(aim);
}



// add details to mainBgBox
function addDetails() {
  
  for (let i = 0; i < 5; i++) {
    const detailLi = document.createElement("li");
    mainBgBoxDetails.appendChild(detailLi);
    detailLi.innerHTML = "<img /><span></span>";
  }
  
  const detailList = mainBgBoxDetails.querySelectorAll("li");
  // console.log(detailList);    // NodeList(5) [li, li, li, li, li]
  const detailListArr = Array.from(detailList);
  // console.log(detailListArr);    // [li, li, li, li, li]

  
  // detail - 1: date (december 27, 2021)
  const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
  const dateObj = new Date();

  const month = monthNames[dateObj.getMonth()];  
  const day = String(dateObj.getDate()).padStart(2, '0'); 
  const year = dateObj.getFullYear();

  detailListArr[0].querySelector("span").textContent = `${month} ${day}, ${year}`;
  detailListArr[0].querySelector("img").src = "../multi/img/calender_icon.png";



  // detail - 2: geolocation  &&  detail - 3: weather (degree)
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  
    // console.log(lat, lon);  // 37.6200456 126.7473828
  
    const API_KEY = "a06f26fedd93580678cfa6cf333c469d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then((response) => response.json()).then((data) => {
      const location = data.name;
      const weather = data.weather[0].main;
      const temperature = data.main.temp;
  
      detailListArr[1].querySelector("span").textContent = location;
      detailListArr[2].querySelector("span").textContent = `${weather}, ${temperature} °C`;

      detailListArr[1].querySelector("img").src = "../multi/img/location_icon.png";
      detailListArr[2].querySelector("img").src = "../multi/img/satellite_weather.png";
    })
  
  }
  function onGeoError() {
    alert("Cannot find your location. Allow browser access to your location to check weather.");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



  // detail - 4: todolist how many left 
  setInterval(()=> {    // cf. could not find better alternative... 
    const todosStr = localStorage.getItem("todos");
    const todosParsed = JSON.parse(todosStr);
    const todosLen = todosParsed.length;
    // console.log(todosLen);   // e.g. 2

    detailListArr[3].querySelector("span").textContent = `Today's todos:  ${todosLen} todos`;
    detailListArr[3].querySelector("img").src = "../multi/img/todolist.png";
  }, 500)



  // detail - 5: music playing now (title )
  const musicTitles = [
    "Go All In - Deanz",
    "Antifreeze - Yerin Baek",
    "FOMO - Sylo Nozra",
    "Hate You - Yerin Baek",
    "Watch - Way Ched (Feat. Leellamarz)",
    "Tired - Sean.K (Feat. Karl Nuge)",
    "Square - Yerin Baek"
  ];

  let streamingMusicNum = 0;

  const playerFunction = document.querySelector(".player_function");
  const prevBtn = playerFunction.querySelector("button:nth-child(1)");
  const nextBtn = playerFunction.querySelector("button:nth-child(3)");

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (streamingMusicNum > 0) {
      streamingMusicNum--;
    } else {
      streamingMusicNum = musicTitles.length - 1;
    } 

    // console.log(streamingMusicNum);
    detailListArr[4].querySelector("span").textContent = `${musicTitles[streamingMusicNum]}`;
    
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    if (streamingMusicNum < 6) {
      streamingMusicNum++;
    } else {
      streamingMusicNum = 0;
    }

    // console.log(streamingMusicNum);
    detailListArr[4].querySelector("span").textContent = `${musicTitles[streamingMusicNum]}`;

  });


  detailListArr[4].querySelector("span").textContent = `${musicTitles[streamingMusicNum]}`;
  detailListArr[4].querySelector("img").src = "../multi/img/music.png";
}




// event 
removeModalBtn.addEventListener("click", removeModal);
