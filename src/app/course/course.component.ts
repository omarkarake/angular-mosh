import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = 'angular';
  courses;
  constructor(service: CourseService) {
    this.courses = service.getCouse();
  }
}
