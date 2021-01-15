import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, eventTupleToStore, FullCalendarComponent } from '@fullcalendar/angular'; 
import { eventNames } from 'process';
import { Button } from 'protractor';
import { AttendedComponent } from '../attended/attended.component';
import { CourseService } from '../courses.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {
  constructor(private courseService:CourseService,public dialog:MatDialog) { }
 
 
  ngOnInit(): void {
  this.courseService.getEvents(this.courseService.course);
  }
 
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick:this.handleDateClick.bind(this),
    eventBackgroundColor:'green',
    events:this.courseService.events,
    
    
  };
  handleDateClick($event) {
    this.courseService.event={title:this.courseService.course.name,date:$event.el.fcSeg.eventRange.range.end};
    this.dialog.open(AttendedComponent);
  }
  ngOnDestroy(){
  this.courseService.events=[];
  }

}
