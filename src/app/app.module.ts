import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

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
    AddStudentComponent
  ],
  entryComponents:[
    PasswordComponent
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
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
