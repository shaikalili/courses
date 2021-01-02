import { Injectable } from "@angular/core";
import { course } from "./cours.model";

@Injectable({providedIn:'root'})
export class CourseService{

    private courses:course[]=[
        new course('math','#math12','12/1/2021',['sunday','monday'],['alon','nadav','yoni']),
        new course('economic','#economic13','13/1/2021',['monday','wednesday'],['alon','nadav','yoni']),
        new course('physics','#physics13','13/1/2021',['monday','friday'],['alon','nadav','yoni']),
        new course('computer-sceiens','#comp15','15/1/2021',['wednesday','friday'],['alon','nadav','yoni']),
    ]

    getCourses(){
        return this.courses;
    }
    
}

