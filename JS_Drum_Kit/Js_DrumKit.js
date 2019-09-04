window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;//Stop the function from running if argument is not an audio class
    audio.currentTime=0;//Sets audio file to restart on each click
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    if(e.propertyName !== 'transform')return;//skips if not a transform 
    console.log(this);
    this.classList.remove('playing');
}

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))