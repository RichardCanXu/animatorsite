const intro = document.getElementById('intro');
const video = document.getElementById('intro-video');
const main = document.getElementById('main-content');
const replayButton = document.getElementById('replay-button');

video.addEventListener('ended', () => {
  intro.style.display = 'none';
  replayButton.style.opacity = 1;
  main.classList.add('show');
});

replayButton.addEventListener('click', () => {
  main.classList.remove('show');
  intro.style.display = 'flex';
  video.currentTime = 0;
  video.play();
});
