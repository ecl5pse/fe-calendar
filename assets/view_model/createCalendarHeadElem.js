'use strict';

function createCalendarNameElem(date) {
    const tableRowElem = document.createElement('tr');
    const tableHeader = document.createElement('th');
    tableHeader.setAttribute('colspan', "7" );
    tableHeader.classList.add('monthName');
    tableHeader.innerText = `${date.toLocaleString('ru-RU',{ month: "long" })} ${date.getFullYear()}`;
    tableRowElem.appendChild(tableHeader);
    return tableRowElem;
}

function createDaysNamesHeadElem(week) {
    const tableRowElem = document.createElement('tr');
    tableRowElem.classList.add('weeksDays');

    week.days.forEach(
        day => {
            const tableHeader = document.createElement('th');

            tableHeader.innerText = `${day.date.toLocaleString('ru-RU',{weekday: "short"})}`;

            tableRowElem.appendChild(tableHeader);
        }
    );


    return tableRowElem;

}




export default function (month) {

    const tableHeadElem = document.createElement('thead');

    tableHeadElem.appendChild( createCalendarNameElem( month.date ) );
    tableHeadElem.appendChild( createDaysNamesHeadElem( month.weeks[0] ) );




    return tableHeadElem;
}