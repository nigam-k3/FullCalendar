import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch: 'full'  },
  {
     path: 'calendar', 
     loadChildren: './full-calendar/full-calendar.module#FullCalendarModule1'
     }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
