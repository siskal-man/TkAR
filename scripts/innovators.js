let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let backBtn = document.querySelector('.back-button__link');
let tigerSound = document.querySelector('.tigerSound');


playBtn.addEventListener('click', function(){
    tigerSound.play();
});

pauseBtn.addEventListener('click', function(){
    tigerSound.pause();
})