const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    var hour = date.getHours();
    if(hour>12){
        hour = hour -12;
    }
    console.log(hour,minutes,seconds);

    const secondDegree = ( (seconds / 60) * 360) + 90;
    const minuteDegree = ( (minutes / 60) *360) + 90;
    const hourDegree = ( (hour / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(getTime,1000);