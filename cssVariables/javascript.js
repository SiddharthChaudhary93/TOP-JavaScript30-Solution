const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function changeFunction(){
    console.log(this.value);
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}


inputs.forEach( input => {
    input.addEventListener('change',changeFunction);
})

inputs.forEach( input => {
    input.addEventListener('mousemove',changeFunction);
})