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
  constructor() {
    let service = new CourseService();
    this.courses = service.getCouse();
  }
}
