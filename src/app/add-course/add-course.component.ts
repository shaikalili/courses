import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { course } from '../cours.model';
import { CourseService } from '../courses.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
@Input() courseForm:FormGroup;
teacherName=this.teacherService.teacher.name;
  constructor(private courseService:CourseService,public dialog:MatDialog,private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.initForm();
    }
    onSubmit(){
    const addedCourse=new course(this.courseForm.value['name'],this.courseForm.value['Id'],
     this.courseForm.value['courseDate'],this.courseForm.value['courseDays'],[],
     this.teacherName);
     console.log(this.courseForm.value['courseDate']);
     this.courseService.Addcourse(addedCourse);
     this.courseService.teachercourses.push(addedCourse);
     this.dialog.closeAll();
   }
   initForm(){
   let courseName="";
   let courseId="";
   let courseDate=new Date;
   let courseDays=[];
   this.courseForm=new FormGroup({
   'name':new FormControl(courseName),
   'Id':new FormControl(courseId),
   'courseDate':new FormControl(courseDate),
   'courseDays':new FormControl(courseDays),
   });
   }

}
