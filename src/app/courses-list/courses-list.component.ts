import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
@Input() course:course;
@ViewChild('checked')checkedref:ElementRef;
isChecked:boolean;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }


}
