import { Component, OnDestroy, OnInit } from '@angular/core';
import { course } from 'src/app/cours.model';
import { CourseService } from 'src/app/courses.service';
import { StudentService } from 'src/app/students.service';

@Component({
  selector: 'app-student-attended',
  templateUrl: './student-attended.component.html',
  styleUrls: ['./student-attended.component.css']
})
export class StudentAttendedComponent implements OnInit, OnDestroy {
  course: course;
  studentName;
  courses;
  displayedColumns: string[] = ['symbol', 'position'];
  dataSource;
  events = [];
  av = [];
  event: { date: Date, attended: string, reason: string };
  constructor(private courseServiec: CourseService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.course = this.courseServiec.course;
    this.studentName = this.studentService.studentName;
    const coursesToFilter = this.courseServiec.attended.filter((course) =>
      course.courseName === this.course.name);
    this.courses = coursesToFilter.filter(name => name.studentName === this.studentName);
    const a = this.courses.sort((a, b) => a.courseDate.getDate() - b.courseDate.getDate()).sort((a, b) =>
      a.courseDate.getMonth() - b.courseDate.getMonth());
    this.events = this.courseServiec.getEvents(this.course);
    this.events = this.events.map(ev => ev.date);

    for (let j = 0; j < this.events.length; j++) {
      for (let i = j; i < a.length; i++) {

        if (a[i].courseDate.toDateString() !== this.events[j].toDateString()) {
          this.av.push(this.event = { date: this.events[j], attended: '', reason: '' })
        }
        else {
          this.av.push(this.event = { date: this.events[j], attended: a[i].attended, reason: a[i].reason })
          break;
        }
      }


    }
    console.log(this.av);
    //console.log(this.av);
    //console.log(this.courses);
    /* console.log(this.courses[0].courseDate.getDate());
     console.log(this.courses[0].courseDate.getDay());
     console.log(this.courses[0].courseDate.getMonth());
     console.log(this.courses[1].courseDate.getDate());
     console.log(this.courses[1].courseDate.getDay());
     console.log(this.courses[1].courseDate.getMonth());
     const a=this.courses.sort((a,b)=>a.courseDate.getDate()-b.courseDate.getDate()).sort((a,b)=>
     a.courseDate.getMonth()-b.courseDate.getMonth());
     console.log(a);*/
    // console.log(this.courses[0].attended);
    //this.events=this.courseServiec.getEvents(this.course);
    /* this.events=this.courseServiec.getEvents(this.course);
      for(let i=0;i<this.av.length;i++){
       //console.log(ev.date);}
         this.event={date:this.av[i].date,attended:'',reason:''};
          //console.log(this.event.date);
          if(this.courses[i]!=undefined){
         // this.event.attended=this.courses[ev].attended;
          this.event={date:this.av[i].date,attended:this.courses[i].attended,reason:''};
          console.log(this.event.attended)
          }
          else  this.event={date:this.av[i].date,attended:'',reason:''};
          if(this.courses[i]!=undefined)
          this.event={date:this.av[i].date,attended:this.courses[i].attended,reason:this.courses[i].reason};
          else this.event={date:this.av[i].date,attended:'',reason:''};
        this.events.push(this.event);}*/

    // console.log(this.events);

    //this.dataSource = this.courses;
  }

  ngOnDestroy() {
    this.courseServiec.events = [];
  }
}
