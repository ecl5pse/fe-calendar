'use strict';

import model from '../model/index.js';

import createCalendarElem from "./createCalendarElem.js";


document.body.appendChild( createCalendarElem( new model.Month( new Date() ) ) );


