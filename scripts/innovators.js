let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let backBtn = document.querySelector('.back-button__link');
let tigerSound = document.querySelector('.tigerSound');

backBtn.addEventListener('click', function(){
    open('https://10.1.4.233:5500/index.html');
})

playBtn.addEventListener('click', function(){
    tigerSound.play();
});

pauseBtn.addEventListener('click', function(){
    tigerSound.pause();
})