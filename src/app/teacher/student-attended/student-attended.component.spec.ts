import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendedComponent } from './student-attended.component';

describe('StudentAttendedComponent', () => {
  let component: StudentAttendedComponent;
  let fixture: ComponentFixture<StudentAttendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAttendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAttendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
