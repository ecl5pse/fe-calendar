'use strict';

import createCalendarHeadElem from "./createCalendarHeadElem.js";
import createCalendarBodyElem from "./createCalendarBodyElem.js";


export default function (month) {
    const calendarTableElem = document.createElement("table");

    calendarTableElem.appendChild( createCalendarHeadElem( month )  );
    calendarTableElem.appendChild( createCalendarBodyElem( month )  );

    return calendarTableElem;


}

