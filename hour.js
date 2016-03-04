/**
 * Created by willli on 16/2/20.
 */

window.onload = function tickSecond(){
    setInterval(Second, 1000);
}
var cur_uSecond = 0;
var cur_dSecond = 0;
var cur_uMinute = 0;
var cur_dMinute = 0;
var cur_uHour = 0;
var cur_dHour = 0;

function Second(){

    if(cur_uHour != 9) {
        var cur_uH = document.getElementById("u-hour" + cur_uHour);
        cur_uH.style.webkitTransform = "rotateX(-90deg)";
        cur_uH.style.opacity = "0";

        cur_uHour++;
        var next_uS = document.getElementById("u-hour" + cur_uHour);
        next_uS.style.webkitTransform = "rotateX(0deg)";
    }
    else if(cur_uHour == 9) {

        cur_uHour = 0;
        cur_uHour = document.getElementById("u-hour" + cur_uHour);
        cur_uHour.style.webkitTransform = "rotateX(0deg)";
        cur_uHour.style.opacity = "1";

        for(var i = 1; i <= 9; i++) {
            next_uH = document.getElementById("u-hour" + i);
            next_uH.style.webkitTransform = "rotateX(90deg)";
            next_uH.style.opacity = "1";
        }
        setTimeout(test, 1000);

        if (cur_dHour != 5) {
            var cur_dH = document.getElementById("d-hour" + cur_dHour);
            cur_dH.style.webkitTransform = "rotateX(-90deg)";
            cur_dH.style.opacity = "0";

            cur_dHour++;
            var next_dH = document.getElementById("d-hour" + cur_dHour);
            next_dH.style.webkitTransform = "rotateX(0deg)";
        }
        else if(cur_dHour == 5) {
            cur_dHour = 0;
            cur_dH = document.getElementById("d-hour" + cur_dHour);
            cur_dH.style.webkitTransform = "rotateX(0deg)";
            cur_dH.style.opacity = "1";

            for(var i = 1; i <= 5; i++) {
                next_dH = document.getElementById("d-hour" + i);
                next_dH.style.webkitTransform = "rotateX(90deg)";
                next_dH.style.opacity = "1";
            }
            setTimeout(test, 1000);
        }
    }
}