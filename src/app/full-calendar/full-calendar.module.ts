import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarRoutingModule } from './full-calendar-routing.module';
import { FullCalendarComponent } from './full-calendar.component';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular'; 

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    FullCalendarComponent
  ],
  exports: [
    FullCalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarRoutingModule,
    FullCalendarModule
  ]
})
export class FullCalendarModule1 { }
