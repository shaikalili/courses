import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../students.service';
import { Student } from '../student.model';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
@ViewChild('userName')userNameRef:ElementRef;
@ViewChild('passWord')passWordRef:ElementRef;
student;
teacher;

constructor(private studentService:StudentService,private teacherService:TeacherService ,
  private router:Router){

}
ngOnInit() {

}
onLogIn(){
if(this.studentService.getStudentByUserAndPassword(this.userNameRef.nativeElement.value,
  this.passWordRef.nativeElement.value)===-1
  && this.teacherService.getTeacherByUserAndPassword(this.userNameRef.nativeElement.value,
    this.passWordRef.nativeElement.value)===-1){
    prompt('please enter a valid password and user name');
  }
   else if(this.studentService.getStudentByUserAndPassword(this.userNameRef.nativeElement.value,
this.passWordRef.nativeElement.value)!=-1){
  this.student=this.studentService.getStudentByUserAndPassword(this.userNameRef.nativeElement.value,
    this.passWordRef.nativeElement.value);
this.router.navigate(['student/'+this.student]);
  }
  else{
this.teacher=this.teacherService.getTeacherByUserAndPassword(
  this.userNameRef.nativeElement.value,this.passWordRef.nativeElement.value
)
this.router.navigate(['teacher/'+this.teacher]);
  }


}

}
