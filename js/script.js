function playMusic() {
    var player = document.getElementById('player')
    player.volume = 1.0;
    if(player.paused) {
        player.play();
    }
}

document.addEventListener('click', playMusic);
