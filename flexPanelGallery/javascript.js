const panels = document.querySelectorAll('.panel');

// console.log(panels);
function animate(){
    console.log(this);
    this.classList.toggle('open');
   
}

function toggleActive(event){
    console.log(event.propertyName)
    if(event.propertyName.includes('flex')){
        this.classList.toggle('openActive');
    }
}

panels.forEach(panel=>{
    panel.addEventListener('click',animate);
});

panels.forEach(panel=>{
    panel.addEventListener('transitionend',toggleActive);
});