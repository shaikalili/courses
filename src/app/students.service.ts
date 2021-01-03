import { Injectable } from "@angular/core";
import { Student } from "./student.model";
@Injectable({providedIn:'root'})
export class StudentService{
    student:Student;
    private students:Student[]=[
        new Student('nadav','256123456','0534568955','hachovshim 24','nadavi','Nadav3'),
        new Student('alon','301252522','0505568958','balfoor 80','aloni','Alon2'),
        new Student('yoni','152232323','0534888952','haperach 10','yona','Yoni4')

    ]

    getStudentByUserAndPassword(user:string,pass:string){
        for(let student of this.students){
            if(student.passWord===pass && student.userName===user){
                this.student=student;
                return this.student;
            }
        }
        return -1;
    }
}