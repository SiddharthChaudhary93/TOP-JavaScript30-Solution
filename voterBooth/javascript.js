const video = document.querySelector('.player');
const canvas = document.querySelector('.photo'); //canvas
const ctx = canvas.getContext('2d');// context for the canvas
const strip = document.querySelector('.strip');//div class strip 
const snap = document.querySelector('.snap'); //audio

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true,  audio: false })
        .then(localMediaStream =>{
            console.log(localMediaStream);
            //old video wa using 
            //video.src = window.URL.createObjectURL(localMediaStream)
            //localMediaStream can be any value we choose eg media lala abc etc
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`Oh NOOO!`,err);
        });
}



function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width,height);
    //canvas should be the same wigth as the video
    canvas.width = width;
    canvas.height = height;

    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);
        //tale the pixels out
        let pixels = ctx.getImageData(0,0,width,height);
       
        // console.log(pixels);
        //stored as rgba values 0 is r, 1 is g, 4 is r again and so on


        //mess with the,
        pixels = rgbSlpit(pixels);
        //put them back
        ctx.globalAlpha = 0.8;//is used to add the transparency for 10 sec to all the pixels
        ctx.putImageData(pixels, 0, 0);
        // debugger;
    }, 16);
}



function takePhoto(){
    //played the sound
    snap.currentTime = 0;
    snap.play();
    //take the date out of the canvas
    const data = canvas.toDataURL('/image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','handsome');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src='${data}' alt='Handsome Man'/>`;
    strip.insertBefore(link,strip.firstChild);
}

function redEffect(pixels){
    //we are changiung the data values for the pixels so make sure to uise the pixels.data value and not just pixels
    for(let i=0 ; i < pixels.data.length ; i += 4){
        pixels.data[i+0] = pixels.data[i+0] + 000;//red
        pixels.data[i+1] = pixels.data[i+1] - 50;//green
        pixels.data[i+2] = pixels.data[i+2] * 0.5;//blue
        // pixels[i+3] = //a
    }
    return pixels;
}

function rgbSlpit(pixels){
    for(let i=0 ; i < pixels.data.length ; i += 4){
        pixels.data[i - 150] = pixels.data[i+0] ;//red
        pixels.data[i - 100] = pixels.data[i+1] ;//green
        pixels.data[i - 150] = pixels.data[i+2] ;//blue
        // pixels[i+3] = //a
    }
    return pixels;
}

function greenScreen(pixels){
    
}


getVideo();

video.addEventListener('canplay',paintToCanvas);