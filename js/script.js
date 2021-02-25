function playMusic() {
    var player = document.getElementById('player')
    player.volume = 0.2;
    if(player.paused) {
        player.play();
    }
}

document.addEventListener('click', playMusic);