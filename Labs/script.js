// script.js
// This script could be used to control the animation or interact with the sun, if needed.

document.getElementById('ball').addEventListener('click', function() {
    this.style.animationPlayState = (this.style.animationPlayState === 'paused') ? 'running' : 'paused';
  });
  