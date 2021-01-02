import { Component, OnInit } from '@angular/core';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
courses:course[];
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  this.courses=this.courseService.getCourses();
  }

}
