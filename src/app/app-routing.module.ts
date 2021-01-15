import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LogInComponent } from './log-in/log-in.component';
import { StudentComponent } from './student/student.component';
import { StudentAttendedComponent } from './teacher/student-attended/student-attended.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'',redirectTo:'log-in', pathMatch:'full'},
  {path:'log-in',component:LogInComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'teacher/:name',component:TeacherComponent},
  {path:'course/:name',component:CalendarComponent},
  {path:'attended/:name',component:StudentAttendedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
