'use strict';

import Day from './Day.js'

class Week {
    constructor(date) {

        this._days = [];

        const monday = Week.getMonday(date);

        for (; ; monday.setDate(monday.getDate() + 1)) {

            this._days.push( new Day(new Date(monday)));

            if(!monday.getDay()){
                break;
            }
        }
    }

    get days() {
        return this._days;
    }

    static getMonday(date){
        const monday = new Date(date);
        const weekDayNumber = monday.getDay();
        monday.setDate(monday.getDate() - (weekDayNumber ? weekDayNumber - 1 : 6));

        return monday;
    }

}

export default Week;
