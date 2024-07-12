import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-course-component',
  templateUrl: './new-course-component.component.html',
  styleUrls: ['./new-course-component.component.css'],
})
export class NewCourseComponentComponent {
  form;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  //   topics: new FormArray([]),
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required], //controls
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  // addTopic(topic: HTMLInputElement) {
  //   this.topics.push(new FormControl(topic.value));
  //   topic.value = ''; // Clear the input field after adding
  // }

  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }

  // get topics() {
  //   return this.form.get('topics') as FormArray;
  // }
}
