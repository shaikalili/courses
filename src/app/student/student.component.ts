import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';
import { Student } from '../student.model';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student:Student;
courses:course[];
  constructor(private studenService:StudentService,private coursService:CourseService
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.student=this.studenService.student;
    this.courses=this.coursService.getCoursesByName(this.student.name);
  }

}
