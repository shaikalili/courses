import { Injectable} from "@angular/core";
import { course } from "./cours.model";

@Injectable({providedIn:'root'})
export class CourseService {
studentCorses=[];
teachercourses=[];
    private courses:course[]=[
        new course('math','#math12','12/1/2021',['sunday','monday'],['alon','yoni'],'shai'),
        new course('economic','#economic13','13/1/2021',['monday','wednesday'],['nadav','yoni'],'yossi'),
        new course('physics','#physics13','13/1/2021',['monday','friday'],['alon'],'shai'),
        new course('computer-sceiens','#comp15','15/1/2021',['wednesday','friday'],['alon','nadav','yoni'],'yossi'),
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

}

