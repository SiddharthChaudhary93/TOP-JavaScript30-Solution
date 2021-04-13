const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minute = date.getMinutes();
    let hour = date.getHours();
    console.log(hour,minute,seconds);
    const secondsDegree = ( (seconds / 60) * 360 ) + 90;
    const minuteDegree = ( (minute / 60) * 360 ) + 90;
    if(hour>12){
        hour=hour-12;
    }
    const hourDegree = ( (hour / 12) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourHand}deg)`;
    
}

setInterval(setDate,1000);