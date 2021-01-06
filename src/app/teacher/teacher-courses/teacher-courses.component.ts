import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { course } from 'src/app/cours.model';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {
@Input() course:course;
toppings = new FormControl();

toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor() { }

  ngOnInit(): void {
  }

}
