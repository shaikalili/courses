import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';
import { PasswordComponent } from '../password/password.component';
import { Student } from '../student.model';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit,OnDestroy {
student:Student;
courses:course[];
  constructor(private studenService:StudentService,private coursService:CourseService
    ,private route:ActivatedRoute,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.student=this.studenService.student;
    this.courses=this.coursService.getCoursesByName(this.student.name);
  }

openDialog(){
this.dialog.open(PasswordComponent);
}
ngOnDestroy(){
  this.coursService.studentCorses=[];
}
}
