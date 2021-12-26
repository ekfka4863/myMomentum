// musicPlayer.js


// DOM
const musicPlayer = document.querySelector(".music_player_src");
const playerFunction = document.querySelector(".player_function");
const prevBtn = playerFunction.querySelector("button:nth-child(1)");
const playBtn = playerFunction.querySelector("button:nth-child(2)");
const nextBtn = playerFunction.querySelector("button:nth-child(3)");
const playerAlbum =  document.querySelector(".player_album");
const pauseBtnImg = playBtn.querySelector("img");

const PLAYING = "playing";

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
  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80",
  "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
  "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];


// function   (reference:  https://wickedmagica.tistory.com/84)
function playMusic () {

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

  spinAlbum();
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

  changeAlbumImg(streamingMusicNum);
  musicPlayer.play();

  musicPlayer.classList.add(PLAYING);
  pauseBtnImg.src = "../multi/img/music_pause_button.png";
  spinAlbum();
}

function nextMusic () {
  if (streamingMusicNum < 6) {
    streamingMusicNum++;
    musicPlayer.src = musicFiles[streamingMusicNum];
  } else {
    streamingMusicNum = 0;
    musicPlayer.src = musicFiles[streamingMusicNum];
  }

  changeAlbumImg(streamingMusicNum);
  musicPlayer.play();

  musicPlayer.classList.add(PLAYING);
  pauseBtnImg.src = "../multi/img/music_pause_button.png";
  spinAlbum();
}


function changeAlbumImg(streamingMusicNum) {
  playerAlbum.style.backgroundImage = `url(${albumImg[streamingMusicNum]})`;
}

// spin player album image
function spinAlbum() {

  if (musicPlayer.classList.contains(PLAYING)) {
    playerAlbum.classList.add("spin");
  } else {
    playerAlbum.classList.remove("spin");
  }
}



// event 
playBtn.addEventListener("click", playMusic);
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
