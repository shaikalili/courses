import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../courses.service';
import { Student } from '../student.model';
import { StudentService } from '../students.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 @Input() studentForm:FormGroup;

 constructor(private studentService:StudentService,
  private coursesService:CourseService,public dialog:MatDialog) { }

 ngOnInit(): void {
 this.initForm();
 }
 onSubmit(){
 const addedstudent=new Student(this.studentForm.value['name'],this.studentForm.value['Id'],
  this.studentForm.value['phone'],this.studentForm.value['adress'],this.studentForm.value['name'],
  this.studentForm.value['name']);
  this.studentService.addStudent(addedstudent);
  this.dialog.closeAll();
}
initForm(){
let studentName="";
let studentId="";
let phoneNumber="";
let adress="";
this.studentForm=new FormGroup({
'name':new FormControl(studentName),
'Id':new FormControl(studentId),
'phone':new FormControl(phoneNumber),
'adress':new FormControl(adress),
});
}

}
