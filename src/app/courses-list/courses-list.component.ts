import { Component, Input, OnInit } from '@angular/core';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
@Input() course:course;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {

  }

}
