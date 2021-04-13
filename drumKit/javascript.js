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

const removeEffect = (event)=>{
    if(event.propertyName != 'transform') return;

    // console.log(event.propertyName);
     this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach( (key) => {
    key.addEventListener('transitionend',function(event){
        if(event.propertyName != 'transform') return;
        key.classList.remove('playing');
    });
})

window.addEventListener('keydown', addAudio);