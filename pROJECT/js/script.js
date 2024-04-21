document.getElementById('house').addEventListener('click', function() {
    const player = document.getElementById('player');
    const house = this.getBoundingClientRect(); // Gets the position of the house

    // Move player to the house
    player.style.top = house.top + 'px';
    player.style.left = house.left + 'px';

    // Change color on arrival
    player.addEventListener('transitionend', function() {
        player.style.backgroundColor = 'red'; 
    }, { once: true });
});
