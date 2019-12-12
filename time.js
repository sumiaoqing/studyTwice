"use strict";
exports.__esModule = true;
function setTime(time) {
    if (time <= 0) {
        return;
    }
    else {
        console.log(time);
        time--;
        setTime(time);
    }
}
// setTime(4)
var time = 11;
var timeSet = setInterval(function () {
    if (time > 0) {
        time--;
        console.log(time);
    }
    else {
        clearTimeout(timeSet);
    }
}, 1000);
