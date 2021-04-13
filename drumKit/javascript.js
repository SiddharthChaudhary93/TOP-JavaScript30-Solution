

const displayDetails = (event) =>{
    console.log(event.keyCode);
}

const audioCheck = (event) => {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`)
    // console.log(audio);
    if(!audio) return;  //stop from running all together
    audio.currentTime=0 // to set the audio from 0 everytime
    audio.play();
    // console.log(key);
    key.classList.add('playing')  //add the transform class
}


function removeGlow(event){
    if(event.propertyName != 'transform') return;
    console.log(event.propertyName);
    this.classList.remove('playing');
}

const key = document.querySelectorAll('.key');

key.forEach( key => {
    key.addEventListener('transitionend',removeGlow);
})
console.log(key);
window.addEventListener('keydown',audioCheck);