import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',redirectTo:'/log-in', pathMatch:'full'},
  {path:'log-in',component:LogInComponent},
  {path:'student/:id',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
