'use strict';

import Week from './Week.js'

class Month {

    constructor(date) {
        this._weeks = [];
        this._date = date;
        const nextMonday = Week.getMonday(new Date(this.date.getFullYear(), this.date.getMonth(), 1))

        do{

            this._weeks.push( new Week( new Date( nextMonday ) ) );

            nextMonday.setDate( nextMonday.getDate() + 7 )

        }while (nextMonday.getMonth() === this.date.getMonth())


    }

    get date() {

        return this._date;

    }

    get weeks() {

        return this._weeks;

    }


}


export default Month;
