import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-component',
  templateUrl: './new-course-component.component.html',
  styleUrls: ['./new-course-component.component.css'],
})
export class NewCourseComponentComponent {
  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = ''; // Clear the input field after adding
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }
}
