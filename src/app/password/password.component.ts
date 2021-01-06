import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
@ViewChild('password')passwordref:ElementRef;
@ViewChild('userName')userNameref:ElementRef;
  constructor(public dialog:MatDialog,private studentService:StudentService) { }

  ngOnInit(): void {
  }
onSave(){
 this.studentService.student.passWord= this.passwordref.nativeElement.value;
 this.studentService.student.userName=this.userNameref.nativeElement.value;
this.dialog.closeAll();
}
}
