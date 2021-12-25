// musicPlayer.js


<audio class="my_audio" controls preload="none">
    <source src="audio/my_song.mp3" type="audio/mpeg">
    <source src="audio/my_song.ogg" type="audio/ogg">
</audio>

var audio = new Audio('audio_file.mp3');
audio.play();