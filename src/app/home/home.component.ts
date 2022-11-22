import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public logInForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public router: Router) {
    let str = formatDate(new Date(), {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    });
    this.logInForm = this.formBuilder.group({
      email: [],
      password: []
    })
  }
  ngOnInit(): void {

  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,// initial value
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
  submit() {
    console.log(this.logInForm.value);
  }
  navToCale() {
    this.router.navigate(['/calendar'])
  }
}
