import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: "Email"},
    {id: 2, name: "Phone"},
  ]
  log(x: any) {
    console.log(x);
  }
  submit(f: any) {
    console.log(f);
  }
}
