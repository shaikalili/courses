export class Student{
    public name:string;
    public phone:string;
    public id:string;
    public adress:string;
    public userName:string;
    public passWord:string;

    
    constructor(name: string, id: string, phone: string, adress:string,userName:string,passWord:string){
        this.name=name;
        this.id=id;
        this.phone=phone;
        this.adress=adress;
        this.userName=userName;
        this.passWord=passWord;
    }
}