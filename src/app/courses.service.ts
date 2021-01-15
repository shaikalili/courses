import { Injectable} from "@angular/core";
import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base";
import { course } from "./cours.model";

@Injectable({providedIn:'root'})
export class CourseService {
studentCorses=[];
teachercourses=[];
addcourse=false;
events=[];
attended=[];
event:{title:string,date:Date};
day:number;
course:course;
    private courses:course[]=[
        new course('Math','#math12',new Date(2021,0,10),['sunday'],['alon','yoni'],'Shai'),
        new course('Economic','#economic13',new Date(2021,0,11),['monday'],['nadav','yoni'],'Yossi'),
        new course('Physics','#physics13',new Date(2021,0,11),['monday'],['alon'],'Shai'),
        new course('Computer-sceiens','#comp15',new Date(2021,0,13),['wednesday'],['alon','nadav','yoni'],'Yossi'),
    ]

    getCourses(){
        return this.courses;
    }
    getCoursesByName(name:string){
        for(let course of this.courses){
            for(let nameInClass of course.students){
                if(name===nameInClass){
                   this.studentCorses.push(course); 
                }
            }
        }
        return this.studentCorses;

    }
    getCoursesByTeacher(teacher:string){
        for(let course of this.courses){
            if(course.teacher===teacher){
                this.teachercourses.push(course);
            }
        }
        return this.teachercourses;
    }
    Addcourse(course:course){
     this.courses.push(course);
    }

    withOutTime(course:course){
     for(let i=0;i<course.date.toDateString().length;){

     }
    }
    getEvents(course:course){
        switch(course.days[0]){
            case 'sunday':this.day=10;break;
            case 'monday':this.day=11;break;
            case 'tuesday':this.day=12;break;
            case 'wednesday':this.day=13;break;
            case 'thursday':this.day=14;break;
            case 'friday':this.day=15;break;
        }
       for(let i=this.day;i<365-this.day;i+=7){
           this.events.push(this.event={title:course.name,date:new Date(2021,0,i)});
       }
       return this.events;
    }

}

