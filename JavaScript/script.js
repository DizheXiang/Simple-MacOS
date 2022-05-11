
//time diplay
updateTime()

var container = document.querySelector(".container-window")
var navbar = document.querySelector(".navbar")

function close_window(close, point, appName) {
    close.style.display = "none"
    point.style.display = "none"
    appName.style.display = "none"
}

function open_window(open, point, appName) {
    navbar.style.display = "flex"
    open.style.display = "block"
    container.style.display = "flex"
    appName.style.display = "block"
    point.style.display = "block"
    launchpad.style.display = "none"
    point_launchpad.style.display = "none"
}

function updateTime() {
    var str = "";
    var now = new Date();
    
    var hours = now.getHours();
    if(hours > 11){
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    var minutes = "";
    minutes += now.getMinutes();
    if(minutes < 10) {
        minutes = "0" +  minutes;
    }
    var days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    str += days[now.getDay()] +  " " + months[now.getMonth()] + " " + now.getDate() 
    + " "+ hours + ":" + minutes;
    if(now.getHours() > 11){
        str += " PM";
    } else {
        str += " AM";
    }
    document.getElementById("currentTime").innerHTML = str;
}
setInterval(updateTime, 1000);

