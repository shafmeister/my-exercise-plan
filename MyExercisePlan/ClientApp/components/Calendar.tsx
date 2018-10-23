import * as React from 'react';
import * as Constants from './Constants';
import { RouteComponentProps } from 'react-router';
import { daysOfWeek, daysOfWeekShort } from './Constants';
var goalFail = require('../images/goalFail.png');
var goalPending = require('../images/goalPending.png');
var goalMet = require('../images/goalMet.png');

export class Calendar extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {
            weeks: GetWeeks()
        };
}
    render() {
        return (
            <div className="calendar-container">
                <div className="calendar-header">
                    {CalendarHeader()}
                </div> 
                <div className="calendar-body">
                    <table>
                       <CalendarBody />
                    </table>
                </div>    
			</div>
        );
    }
};

function CalendarHeader() {
    var currentDate = new Date();
    var monthYear = Constants.months[currentDate.getMonth()] + " " + currentDate.getFullYear();
    return monthYear;
} 

function CalendarBody() {
    const days = GetDays();
    const listDays = daysOfWeekShort.map((day) =>
        <th key={day.toString()}>{day}</th>
    );
    var weekLength = 7;
    var weeks = days.map((day) => {
        if (day.condition == 3) {
            return (
                <td className={day.style} key={day.date.getTime().toString()}>{day.date.getDate()}
                    <div className="goal-display">
                        <img src={String(goalMet)} />
                    </div>
                </td>
                )
        }
        if (day.condition == 2) {
            return (
                <td className={day.style} key={day.date.getTime().toString()}>{day.date.getDate()}
                    <div className="goal-display">
                        <img src={String(goalPending)} />
                    </div>
                </td>
            )
        }
        if (day.condition == 1) {
            return (
                <td className={day.style} key={day.date.getTime().toString()}>{day.date.getDate()}
                    <div className="goal-display">
                        <img src={String(goalFail)} />
                    </div>
                </td>
            )
        }
        else{
            return <td className={day.style} key={day.date.getTime().toString()}>{day.date.getDate()}</td>
        }
    }).reduce(function (r: JSX.Element[][], element, index) {
        index % weekLength === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
        }, []).map(function (week, index) {
            return <tr key={index}>{week}</tr>
    });

    return (
        <tbody>
            <tr>
                {listDays}
            </tr>
                {weeks}
        </tbody>
    );

}


function CalendarWeek(week: (number | null)[]) {
    const days = week;
    const buildWeeks = days.map((day) =>
        <td>{day}</td>
    );

    return [
        buildWeeks
    ];
}

function GetWeeks() {

    return "";
    //Build calendar
    /*
    while (calDay <= lastDay.getDate()) {
        var loopDay = new Date(currentYear, currentMonth, calDay);
        if (calDay + dayOffSet == calPosition) {
            calendar = calendar + "<td>" + calDay + "</td>";
            calDay++;
        }
        else {
            calendar = calendar + "<td></td>";
        }
        if (calPosition % 7 == 0 && calPosition != 0) {
            calendar = calendar + "</tr><tr>";
        }
        calPosition++;
    }
*/

    /*return (
        <tr>{calendar}</tr>
    );
    */
}

function GetDays() {
    //Get new datetime for now
    var now = new Date();
    //Get firstDay of current month and year
    var firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    //One day in Milliseconds
    var oneDay = 1000 * 60 * 60 * 24;
    //Server data
    var dateInfo = [
        {
            "date": "10-01-2018",
            "condition": 3
        },
        {
            "date": "10-05-2018",
            "condition": 3
        },
        {
            "date": "10-15-2018",
            "condition": 2
        },
        {
            "date": "10-11-2018",
            "condition": 1
        }
    ];
    //Styles for 
    var nonCurrentMonthStyle = "cal-date-noncurr";
    var currentMonthStyle = "cal-date-curr";
    //Array to hold dates
    var dates = [];
    //42 is the amount of days we want to represent in the calendar, 7 by 6
    for (var i = -(firstDay.getDay()); i < 42 - firstDay.getDay(); i++) {
        var baseDate = new Date(firstDay.valueOf() + oneDay * i);
        var obj = null;
        for (var j = 0; j < dateInfo.length; j++) {
            var infoDate = new Date(dateInfo[j].date);
            if (baseDate.valueOf() == infoDate.valueOf()) {
                obj = { date: baseDate, condition: dateInfo[j].condition, style: "" }
            }
        }
        if (obj == null) {
            obj = { date: baseDate, condition: 0, style: "" }
        }
        if (obj.date.getMonth() == now.getMonth()) {
            obj.style = currentMonthStyle;
        }
        else {
            obj.style = nonCurrentMonthStyle;
        }
        dates.push(obj);
    }
    console.log(dates);
    return dates;
}

export default Calendar;