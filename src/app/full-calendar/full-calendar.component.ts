import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {

  constructor() {
    let str = formatDate(new Date(), {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });
    
    console.log(str);
   }

  ngOnInit() {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false ,// initial value
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-11-17' },
      { title: 'event 2', date: '2022-11-22' }
    ],
    selectable: true

  };
  handleDateClick(arg) {
    console.log(arg);
    
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
   // this.calendarOptions.next();
  }
}
