import { course } from "./cours.model";

export class Teacher{
  public name:string;
  public id:string;
  public userName:string;
  public passWord:string;
 

  constructor(name: string, id: string,userName:string,passWord:string){
    this.name=name;
    this.id=id;
    this.userName=userName;
    this.passWord=passWord;
}
}