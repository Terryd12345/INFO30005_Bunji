// Source: https://codepen.io/SitePoint/pen/MwNPVq

function getTimeLeft(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var seconds = Math.floor((t / 1000) % 60);
    
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}

function startCountdown(id, endTime) {
    var clock = document.getElementById(id);
    
    var days = clock.querySelector(".days");
    var hours = clock.querySelector(".hours");
    var minutes = clock.querySelector(".minutes");
    var seconds = clock.querySelector(".seconds");
    
    function updateClock() {
        var t = getTimeLeft(endTime);
        
        days.innerHTML = t.days;
        hours.innerHTML = ("0" + t.hours).slice(-2);
        minutes.innerHTML = ("0" + t.minutes).slice(-2);
        seconds.innerHTML = ("0" + t.seconds).slice(-2);
        
        if (t.total <= 0) {
            clearInterval(interval);
        }
    }
    
    updateClock();
    var interval = setInterval(updateClock, 1000);
}

var endTime = new Date(Date.parse("21 May 2018 22:00:00 GMT"));
startCountdown("countdown", endTime);
