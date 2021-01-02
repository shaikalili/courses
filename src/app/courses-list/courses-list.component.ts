import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses();
  }

}
