'use strict';
import {timerValueElem, timerResetElem, timerStartElem, timerStopElem} from './controls.js';

const INTERVAL = 10;
const date = new Date();
let intervalId = null;

timerStartElem.onclick = function () {
    if (intervalId) {
        return;
    }
    intervalId = setInterval(incrementDateSecond, INTERVAL);
};

timerStopElem.onclick = function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

timerResetElem.onclick = resetTimerValue;
timerResetElem.click();

function resetTimerValue() {
    date.setHours(0, 0, 0, 0);
    refreshTimerValue();
}

function incrementDateSecond() {
    date.setMilliseconds(date.getMilliseconds() + INTERVAL );
    refreshTimerValue();
}

function refreshTimerValue() {
    timerValueElem.innerText = `${myFormat2(date.getMinutes())}:${myFormat2(date.getSeconds())}:${myFormat3(date.getMilliseconds())}`
}

function myFormat3(value) {
    return value < 100 ? value < 10 ? `00${value}` : `0${value}` : value;
}

function myFormat2(value) {
    return value < 10 ? `0${value}` : `${value}`;
}