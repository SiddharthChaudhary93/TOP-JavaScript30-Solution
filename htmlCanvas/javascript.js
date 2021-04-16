const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;
let isSelected =false;
let lastX = 0;
let lastY =0;
// ctx.

/*ctx.beginPath()
lineTo
moveTo
lineWidth
stroke

*/
let direction = true;
function draw(e){
    
    if(!isSelected) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);

    //end at
    ctx.lineTo(e.offsetX,e.offsetY);

    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++;
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth>100 || ctx.lineWidth<=1){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}



canvas.addEventListener('mousedown',(e)=>{
    isSelected = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
    });
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>isSelected = false);
canvas.addEventListener('mouseout',()=>isSelected = false);
