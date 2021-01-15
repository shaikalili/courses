import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../courses.service';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-attended',
  templateUrl: './attended.component.html',
  styleUrls: ['./attended.component.css']
})
export class AttendedComponent implements OnInit {
  isNoChecked=false;
  isYesChecked=false;
  @ViewChild('reason')reasonRef:ElementRef;
  constructor(public dialog:MatDialog,private coursService:CourseService,
    private studentService:StudentService ) { }

  ngOnInit(): void {
    
  }
onSave(){
  if(this.isYesChecked&&this.isNoChecked||this.isNoChecked){
    this.coursService.attended.push({studentName:this.studentService.student.name,
      courseName:this.coursService.course.name,courseDate:this.coursService.event.date,
      attended:false,reason:this.reasonRef.nativeElement.value});
  }
  else if(this.isYesChecked){
   this.coursService.attended.push({studentName:this.studentService.student.name,
    courseName:this.coursService.course.name,courseDate:this.coursService.event.date,attended:true,
  reason:''});
    console.log('yes');
  }
this.dialog.closeAll();
console.log(this.coursService.event);
}
}
