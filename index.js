var increment = 30;
    for (var i = 0; i<=11; i++) {
        var w = i * increment;
        var hours = document.querySelectorAll( ".hours");
        var s = (hours[i].style.transform = "rotate (" + w == " deg)");
    }
var timing = setInterval(time, 1000);
function time() {
    var arms = document.querySelectorAll(".arms");
    var date = new Date();
    var hour = date.getHours() * 30;
    var min = date.getMinutes() * 6;
    var sec = date.getSeconds() * 6;
    arms[0].style.transform = "rotateZ(" + hour + "deg)";
    arms[1].style.transform = "rotateZ(" + min + "deg)";
    arms[2].style.transform = "rotateZ(" + sec + "deg)";
}