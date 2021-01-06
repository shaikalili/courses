import { Injectable } from "@angular/core";
import { Teacher } from "./teacher.model";

@Injectable({providedIn:'root'})
export class TeacherService{
teacher:Teacher
    private techers:Teacher[]=[
        new Teacher('shai','213458741','shai','shai92'),
        new Teacher('yossi','245682597','yossi','yossi91')
    ]

    getTeacherByUserAndPassword(user:string,pass:string){
        for(let teacher of this.techers){
            if(teacher.passWord===pass && teacher.userName===user){
                this.teacher=teacher;
                return this.teacher;
            }
        }
        return -1;
    }
}