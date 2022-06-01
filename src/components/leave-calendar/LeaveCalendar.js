import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import list from '@fullcalendar/list';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import "./LeaveCalendar.css";

export default class LeaveCalendar extends React.Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [

        ]
    };

    render() {
        return (
            <div className="calendar">
            
                <div className="grid">
                    <FullCalendar
                        initialView="timeGridWeek"
                        firstDay='1'
                        aspectRatio= '1.8'
                        slotMinTime='08:00:00'
                        slotMaxTime='19:00:00'
                        columnFormat= 'dddd'
                        eventLimit= {true}
                        editable= {true}
                        height={700}
                        themeSystem='bootstrap'
                        businessHours= {{
                            // days of week. an array of zero-based day of week integers (0=Sunday)
                            daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday - Friday

                            startTime: '08:00', // a start time (10am in this example)
                            endTime:'17:30', // an end time (6pm in this example)
                        }}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, list, bootstrap5Plugin]}
                        ref={this.calendarComponentRef}
                        weekends={this.state.calendarWeekends}
                        events={this.state.calendarEvents}
                    
                    />
                </div>

                <div className="toggle-weekday">
                    <button onClick={this.toggleWeekends}>toggle weekends</button>
                </div>
            </div>
        );
    }

    toggleWeekends = () => {
    this.setState({
      // update a property
        calendarWeekends: !this.state.calendarWeekends
    });
    };

}