const displayInfo= (event =>{
    console.log(event.keyCode);
})

const addAudio = (event) =>{
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
    
}

function removeEffect(event) {
    if(event.propertyName != 'transform') return;

    // console.log(event.propertyName);
    // console.log(this)
     this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');

key.forEach( (key) => {
    key.addEventListener('transitionend',removeEffect)
    
})

window.addEventListener('keydown', addAudio);

const mouseCLick = document.querySelectorAll('.key');

mouseCLick.forEach(key =>{
    key.addEventListener('click', function(event){
        console.log(event);
    })
})