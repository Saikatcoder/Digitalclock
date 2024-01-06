const hour = document.getElementById("hour")
const secound = document.getElementById("Secound")
const minute = document.getElementById("Minutes")
const ampm = document.getElementById("ampm")

function updateclock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    let AMpm = "AM";
    

    if(hours>12){
        hours = hours-12;
    }
    if(hours>=12){
        AMpm = "PM";
    }

    hours = hours<0 ? "0"+hours : hours;
    minutes = minutes<0 ? "0"+minutes : minutes;
    sec = sec<0 ? "0"+sec : sec;

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    secound.innerHTML = sec;
    ampm.innerText = AMpm;
    setTimeout(updateclock,1000);

}
updateclock()