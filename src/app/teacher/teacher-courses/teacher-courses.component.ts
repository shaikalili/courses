import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { course } from 'src/app/cours.model';
import { CourseService } from 'src/app/courses.service';
import { Student } from 'src/app/student.model';
import { StudentService } from 'src/app/students.service';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {
  @Input() course: course;
  studentToAddToClass = [];
  studentNames = [];
  value;
  courseDate;
  addStudent = new FormControl();
  constructor(private courseService: CourseService, private router: Router
    , private studentservice: StudentService) { }

  ngOnInit(): void {
    this.courseDate = this.course.date.toDateString();
    this.getStudentToClass();
  }
  onClick(student: string) {
    this.courseService.course = this.course;
    this.studentservice.studentName = student;
    this.router.navigate(['attended/' + student]);
  }
  getStudentToClass() {
    this.studentservice.names = [];
    this.studentToAddToClass=[];
    this.studentToAddToClass = 
    this.studentservice.getStudentsName().filter(name=>this.course.students.indexOf(name)===-1);
}
onAdd(){
  for(let name of this.addStudent.value){
  this.course.students.push(name);
 this.studentToAddToClass.splice(this.studentToAddToClass.indexOf(name),1);
}
}
}

