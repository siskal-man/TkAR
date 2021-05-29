let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');


// let backBtn = document.querySelector('.back-button__link');

let sound = document.querySelector('.sound');


playBtn.addEventListener('click', function(){
    sound.play();
});

pauseBtn.addEventListener('click', function(){
    sound.pause();
})
