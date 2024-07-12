import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.css',
})
export class NewCourseFormComponent {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
  submit(course: object) {
    console.log(course);
  }
}
