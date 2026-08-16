function tocarHino() {
    const audio = new Audio("icons/hino do galo.mp3");
    audio.play();
}

let galoIcone = document.querySelector('#galo-icone');
let galoBtn = document.querySelector('.galo-btn');

galoBtn.addEventListener('mouseover', function() {
    galoIcone.src = 'icons/galo.png'
})

galoBtn.addEventListener('mouseout', function() {
    galoIcone.src = 'icons/bola-de-futebol.png'
})