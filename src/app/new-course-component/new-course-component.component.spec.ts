import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponentComponent } from './new-course-component.component';

describe('NewCourseComponentComponent', () => {
  let component: NewCourseComponentComponent;
  let fixture: ComponentFixture<NewCourseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCourseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCourseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
