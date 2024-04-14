const voice1 = new Audio('voice1.mp3');
const voice2 = new Audio('voice2.mp3');
const voice3 = new Audio('voice3.mp3');
const voice4 = new Audio('voice4.mp3');

const voice1Checkbox = document.getElementById('voice1');
const voice2Checkbox = document.getElementById('voice2');
const voice3Checkbox = document.getElementById('voice3');
const voice4Checkbox = document.getElementById('voice4');

const playButton = document.getElementById('playButton');

function playVoices() {
  voice1.play();
  voice2.play();
  voice3.play();
  voice4.play();
}

function muteVoice(voice, shouldMute) {
  voice.muted = shouldMute;
}

playButton.addEventListener('click', () => {
  if (voice1.paused) {
    playVoices();
  }
});

voice1Checkbox.addEventListener('change', () => {
  muteVoice(voice1, !voice1Checkbox.checked);
});

voice2Checkbox.addEventListener('change', () => {
  muteVoice(voice2, !voice2Checkbox.checked);
});

voice3Checkbox.addEventListener('change', () => {
  muteVoice(voice3, !voice3Checkbox.checked);
});

voice4Checkbox.addEventListener('change', () => {
  muteVoice(voice4, !voice4Checkbox.checked);
});

voice1.addEventListener('ended', () => {
  voice1.currentTime = 0;
  voice2.currentTime = 0;
  voice3.currentTime = 0;
  voice4.currentTime = 0;
});