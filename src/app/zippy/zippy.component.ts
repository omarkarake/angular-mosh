import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'], // Correcting the property name to 'styleUrls'
})
export class ZippyComponent {
  @Input() title: string = 'omar'; // Using a consistent name for the input property
}
