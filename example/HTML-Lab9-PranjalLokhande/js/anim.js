document.getElementById('control-btn').addEventListener('click', function() {
    const sky = document.querySelector('.sky');
    const sun = document.querySelector('.sun');
    if (sky.style.animationPlayState === 'paused' || sun.style.animationPlayState === 'paused') {
        sky.style.animationPlayState = 'running';
        sun.style.animationPlayState = 'running';
        this.textContent = 'Pause';
    } else {
        sky.style.animationPlayState = 'paused';
        sun.style.animationPlayState = 'paused';
        this.textContent = 'Play';
    }
});
