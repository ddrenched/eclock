/**
 * Created by willli on 16/2/20.
 */

var cur_uMinute = 0;
var cur_dMinute = 0;

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
        setTimeout(test, 1000);

        if (cur_dMinute != 5) {
            var cur_dM = document.getElementById("d-minute" + cur_dMinute);
            cur_dM.style.webkitTransform = "rotateX(-90deg)";
            cur_dM.style.opacity = "0";

            cur_dMinute++;
            var next_dS = document.getElementById("d-minute" + cur_dMinute);
            next_dS.style.webkitTransform = "rotateX(0deg)";
        }
        else if(cur_dMinute == 5) {
            cur_dSecond = 0;
            cur_dM = document.getElementById("d-minute" + cur_dMinute);
            cur_dM.style.webkitTransform = "rotateX(0deg)";
            cur_dM.style.opacity = "1";

            for(var i = 1; i <= 5; i++) {
                next_dM = document.getElementById("d-minute" + i);
                next_dM.style.webkitTransform = "rotateX(90deg)";
                next_dM.style.opacity = "1";
            }
            setTimeout(test, 1000);
        }
    }
}

function test(){
    return true;
}