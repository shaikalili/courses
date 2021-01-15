import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';
import { PasswordComponent } from '../password/password.component';
import { Teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit, OnDestroy {
  teacher: Teacher;
  courses: course[];

  constructor(private teacherService: TeacherService, private courseService: CourseService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.teacher = this.teacherService.teacher;
    this.courses = this.courseService.getCoursesByTeacher(this.teacher.name);
    console.log(this.courseService.attended);
  }
  openDialog() {
    this.dialog.open(PasswordComponent);
  }
  onAddStudent() {
    this.dialog.open(AddStudentComponent);
  }
  onAddCourse() {
    this.dialog.open(AddCourseComponent);
  }
  ngOnDestroy() {
    this.courseService.teachercourses = [];
  }

}
