
updateTime();

function updateTime() {
    var str = "";
    var now = new Date();
    
    var hours = now.getHours();
    if(hours > 11){
        hours -= 12;
    }
    var days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    str += days[now.getDay()] +  " " + months[now.getMonth()] + " " + now.getDate() 
    + " "+ hours +":" + now.getMinutes();
    if(now.getHours() > 11){
        str += " PM";
    } else {
        str += " AM";
    }
    document.getElementById("currentTime").innerHTML = str;
}
setInterval(updateTime, 1000);