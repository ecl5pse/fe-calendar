'use strict';

import Day from './Day.js'

class Week {
    constructor(date) {

        this._days = [];

        const firstDate = new Date();
        const weekDayNumber = firstDate.getDay();
        firstDate.setDate(firstDate.getDate() - (weekDayNumber ? weekDayNumber - 1 : 7));// 1 :  1 2 3 4 5 6 0

        for (; ; firstDate.setDate(firstDate.getDate() + 1)) {

            this._days.push( new Day(new Date(firstDate)));

            if(!firstDate.getDay()){
                break;
            }
        }
    }

    get days() {
        return this._days;
    }

}





export default Week;
