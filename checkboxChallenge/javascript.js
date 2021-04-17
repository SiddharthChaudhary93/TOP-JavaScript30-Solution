const checkboxes = document.querySelectorAll('input');


let lastSelected;

function selectAll(event){
    // console.log(this);
    let inBetween = false;
    if(event.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            
            console.log(checkbox);
            if(checkbox === lastSelected || checkbox === this){
                //agar last selected and isbaaar jo select kiya uske beech me hai to
                //element will be beech me i.e. in Between
                inBetween = !inBetween;
                console.log(`we are here`);
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastSelected = this;
}



checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click',selectAll);
})
