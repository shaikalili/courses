

export class course {

    public name: string;
    public id: string;
    public date: Date;
    public days:string[];
    public students:string[];
    public teacher:string;
   

    constructor(name: string, id: string, date:Date, days:string[],students:string[],teacher:string){
        this.name=name;
        this.id=id;
        this.date=date;
        this.days=days;
        this.students=students
        this.teacher=teacher;
    }
}