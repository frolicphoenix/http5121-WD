function movetoBlue() {
    const player = document.getElementById('player');
    const house = document.getElementById('house');
    // const house = this.getBoundingClientRect(); // Gets the position of the house

    // // Move player to the house
    // player.style.top = house.top + 'px';
    // player.style.left = house.left + 'px';
    
    player.classList.toggle("moveB");
    player.classList.remove("moveY");
    player.classList.remove("moveG");

    house.style.backgroundColor = 'blue';

    // Change color on arrival
    // player.addEventListener('transitionend', function() {
    //     house.style.backgroundColor = 'blue'; 
    //  }, { once: true });
}
document.getElementById("house").onclick = movetoBlue;   

function movetoYellow() {
    const player = document.getElementById('player');
    // const house2 = this.getBoundingClientRect(); // Gets the position of the house
    const house2 = document.getElementById('house2');

    // // Move player to the house
    // player.style.top = house.top + 'px';
    // player.style.left = house.left + 'px';

    player.classList.toggle("moveY");
    player.classList.remove("moveB");
    player.classList.remove("moveG");

    house2.style.backgroundColor = 'yellow'; 

    // Change color on arrival
    // player.addEventListener('transitionend', function() {
    //     player.style.backgroundColor = 'yellow'; 
    // }, { once: true });
}
document.getElementById("house2").onclick = movetoYellow;   

function movetoGreen() {
    const player = document.getElementById('player');
    // const house3 = this.getBoundingClientRect(); // Gets the position of the house
    const house3 = document.getElementById('house3');

    // // Move player to the house
    // player.style.top = house.top + 'px';
    // player.style.left = house.left + 'px';

    player.classList.toggle("moveG");
    player.classList.remove("moveY");
    player.classList.remove("moveB");

    house3.style.backgroundColor = 'green'; 
    // Change color on arrival
    // player.addEventListener('transitionend', function() {
    //     player.style.backgroundColor = 'green'; 
    // }, { once: true });
}
document.getElementById("house3").onclick = movetoGreen;
