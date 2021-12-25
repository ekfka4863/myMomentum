// musicPlayer.js

// DOM
const musicPlayer = document.querySelector(".music_player_src");
const playerFunction = document.querySelector(".player_function");
const prevBtn = playerFunction.querySelector("button:nth-child(1)");
const playBtn = playerFunction.querySelector("button:nth-child(2)");
const nextBtn = playerFunction.querySelector("button:nth-child(3)");
const playerAlbum =  document.querySelector(".player_album");



// mp3 files
const musicFiles = [
  "../multi/audio/GoAllIn.mp3",
  "../multi/audio/Antifreeze.mp3",
  "../multi/audio/FOMO.mp3",
  "../multi/audio/HateYou.mp3",
  "../multi/audio/Watch.mp3",
  "../multi/audio/Tired.mp3",
  "../multi/audio/Square.mp3",
];

// background player album image
const albumImg = [
  "",
];


// function
function playMusic () {
  const PLAYING = "playing";

  const pauseBtnImg = playBtn.querySelector("img");

  if (!musicPlayer.classList.contains(PLAYING)) {
    musicPlayer.classList.add(PLAYING);
    musicPlayer.play();
    pauseBtnImg.src = "../multi/img/music_pause_button.png";
  } else {
    // music_pause_button.png
    musicPlayer.classList.remove(PLAYING);
    pauseBtnImg.src = "../multi/img/music_play_button.png";
    musicPlayer.pause();
  }
}

let streamingMusicNum = 0;

function prevMusic () {
  // console.log(streamingMusicNum);

  if (streamingMusicNum > 0) {
    streamingMusicNum--;
    musicPlayer.src = musicFiles[streamingMusicNum];
  } else {
    musicPlayer.src = musicFiles[musicFiles.length - 1];
    streamingMusicNum = musicFiles.length - 1;
  } 

  musicPlayer.play();
}

function nextMusic () {
  if (streamingMusicNum < 6) {
    streamingMusicNum++;
    musicPlayer.src = musicFiles[streamingMusicNum];
  } else {
    streamingMusicNum = 0;
    musicPlayer.src = musicFiles[streamingMusicNum];
  }

  musicPlayer.play();
}


function spinAlbum() {

}


// event 
playBtn.addEventListener("click", playMusic);
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
