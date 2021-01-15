import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
@Input() course:course;
//@ViewChild('checked')checkedref:ElementRef;
//isChecked:boolean;
courseDate;
  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
    this.courseDate=this.course.date.toDateString();
  
  }
  onClick(){
    this.courseService.course=this.course;
this.router.navigate(['course/'+this.course])
  }

}
