'use strict';



function createWeekElem(week) {
    const tableElementRow = document.createElement('tr');

    week.days.forEach(
        day=>{

             tableElementRow.appendChild(createNumberDay(day));


        }
    );
    return tableElementRow

}



function createNumberDay(day) {

    const tableElement = document.createElement('td');

    tableElement.innerText = day.date.toLocaleString("ru-Ru",{day:"2-digit"});

    return tableElement;

}











export default function (month) {


    const tableBodyElem = document.createElement('tbody');

    month.weeks.forEach(
        week=>{

            tableBodyElem.appendChild(createWeekElem(week) );


        }
    );

    return tableBodyElem;

}