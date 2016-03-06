/**
 * Created by willli on 16/2/20.
 */

window.onload = function start(){
    setInterval(Second, 1000);
    setInterval(Minute, 60000);
    setInterval(Hour, 3600000);
}

var cur_uSecond = 0;
var cur_dSecond = 0;
var cur_uMinute = 0;
var cur_dMinute = 0;
var cur_uHour = 0;
var cur_dHour = 0;

function Second(){

    if(cur_uSecond != 9) {
        var cur_uS = document.getElementById("u-second" + cur_uSecond);
        cur_uS.style.webkitTransform = "rotateX(-90deg)";
        cur_uS.style.opacity = "0";

        cur_uSecond++;
        var next_uS = document.getElementById("u-second" + cur_uSecond);
        next_uS.style.webkitTransform = "rotateX(0deg)";
    }
    else if(cur_uSecond == 9) {

        cur_uSecond = 0;
        cur_uS = document.getElementById("u-second" + cur_uSecond);
        cur_uS.style.webkitTransform = "rotateX(0deg)";
        cur_uS.style.opacity = "1";

        for(var i = 1; i <= 9; i++) {
            next_uS = document.getElementById("u-second" + i);
            next_uS.style.webkitTransform = "rotateX(90deg)";
            next_uS.style.opacity = "1";
        }

        if (cur_dSecond != 5) {
            var cur_dS = document.getElementById("d-second" + cur_dSecond);
            cur_dS.style.webkitTransform = "rotateX(-90deg)";
            cur_dS.style.opacity = "0";

            cur_dSecond++;
            var next_dS = document.getElementById("d-second" + cur_dSecond);
            next_dS.style.webkitTransform = "rotateX(0deg)";
        }
        else if(cur_dSecond == 5) {
            cur_dSecond = 0;
            cur_dS = document.getElementById("d-second" + cur_dSecond);
            cur_dS.style.webkitTransform = "rotateX(0deg)";
            cur_dS.style.opacity = "1";

            for(var i = 1; i <= 5; i++) {
                next_dS = document.getElementById("d-second" + i);
                next_dS.style.webkitTransform = "rotateX(90deg)";
                next_dS.style.opacity = "1";
            }
        }
    }
}



function Minute(){

    if(cur_uMinute != 9) {
        var cur_uM = document.getElementById("u-minute" + cur_uMinute);
        cur_uM.style.webkitTransform = "rotateX(-90deg)";
        cur_uM.style.opacity = "0";

        cur_uMinute++;
        var next_uM = document.getElementById("u-minute" + cur_uMinute);
        next_uM.style.webkitTransform = "rotateX(0deg)";
    }
    else if(cur_uMinute == 9) {

        cur_uMinute = 0;
        cur_uM = document.getElementById("u-minute" + cur_uMinute);
        cur_uM.style.webkitTransform = "rotateX(0deg)";
        cur_uM.style.opacity = "1";

        for(var i = 1; i <= 9; i++) {
            next_uM = document.getElementById("u-minute" + i);
            next_uM.style.webkitTransform = "rotateX(90deg)";
            next_uM.style.opacity = "1";
        }

        if (cur_dMinute != 5) {
            var cur_dM = document.getElementById("d-minute" + cur_dMinute);
            cur_dM.style.webkitTransform = "rotateX(-90deg)";
            cur_dM.style.opacity = "0";

            cur_dMinute++;
            var next_dS = document.getElementById("d-minute" + cur_dMinute);
            next_dS.style.webkitTransform = "rotateX(0deg)";
        }
        else if(cur_dMinute == 5) {

            cur_dMinute = 0;
            cur_dM = document.getElementById("d-minute" + cur_dMinute);
            cur_dM.style.webkitTransform = "rotateX(0deg)";
            cur_dM.style.opacity = "1";

            for(var i = 1; i <= 5; i++) {
                var next_dM = document.getElementById("d-minute" + i);
                next_dM.style.webkitTransform = "rotateX(90deg)";
                next_dM.style.opacity = "1";
            }
        }
    }
}



function Hour(){

    if(cur_uHour != 9) {
        var cur_uH = document.getElementById("u-hour" + cur_uHour);
        cur_uH.style.webkitTransform = "rotateX(-90deg)";
        cur_uH.style.opacity = "0";

        cur_uHour++;
        var next_uH = document.getElementById("u-hour" + cur_uHour);
        next_uH.style.webkitTransform = "rotateX(0deg)";
    }
    else if(cur_uHour == 9) {

        cur_uHour = 0;
        cur_uH = document.getElementById("u-hour" + cur_uHour);
        cur_uH.style.webkitTransform = "rotateX(0deg)";
        cur_uH.style.opacity = "1";

        for(var i = 1; i <= 9; i++) {
            next_uH = document.getElementById("u-hour" + i);
            next_uH.style.webkitTransform = "rotateX(90deg)";
            next_uH.style.opacity = "1";
        }

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
        }
    }
}
