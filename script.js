const voice1 = new Audio('voice1.mp3');
const voice2 = new Audio('voice2.mp3');
const voice3 = new Audio('voice3.mp3');
const voice4 = new Audio('voice4.mp3');

const voice1Checkbox = document.getElementById('voice1');
const voice2Checkbox = document.getElementById('voice2');
const voice3Checkbox = document.getElementById('voice3');
const voice4Checkbox = document.getElementById('voice4');

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (voice1Checkbox.checked) voice1.play();
  if (voice2Checkbox.checked) voice2.play();
  if (voice3Checkbox.checked) voice3.play();
  if (voice4Checkbox.checked) voice4.play();
});

function toggleVoice(voiceCheckbox, voice) {
  if (voiceCheckbox.checked) {
    voice.currentTime = voice1.currentTime;
    voice.play();
  } else {
    voice.pause();
  }
}

voice1Checkbox.addEventListener('change', () => {
  toggleVoice(voice1Checkbox, voice1);
});

voice2Checkbox.addEventListener('change', () => {
  toggleVoice(voice2Checkbox, voice2);
});

voice3Checkbox.addEventListener('change', () => {
  toggleVoice(voice3Checkbox, voice3);
});

voice4Checkbox.addEventListener('change', () => {
  toggleVoice(voice4Checkbox, voice4);
});

voice1.addEventListener('ended', () => {
  voice1.currentTime = 0;
  voice2.currentTime = 0;
  voice3.currentTime = 0;
  voice4.currentTime = 0;
});
