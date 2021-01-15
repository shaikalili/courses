import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { LogInComponent } from './log-in/log-in.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddCourseComponent } from './add-course/add-course.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { StudentInfoComponent } from './student/student-info/student-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AttendedComponent } from './attended/attended.component';
import { StudentAttendedComponent } from './teacher/student-attended/student-attended.component';
import {MatTableModule} from '@angular/material/table';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin

]);

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    HeaderComponent,
    StudentComponent,
    LogInComponent,
    PasswordComponent,
    TeacherComponent,
    TeacherCoursesComponent,
    AddStudentComponent,
    AddCourseComponent,
    CalendarComponent,
    StudentInfoComponent,
    AttendedComponent,
    StudentAttendedComponent
  ],
  entryComponents:[
    PasswordComponent,
    AddStudentComponent,
    AddCourseComponent,
    AttendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSidenavModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
