import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}
  @HostListener('focus') onFocus() {
    console.log('focus');
  }
  @HostListener('blur') onBlur() {
    console.log('blur');
  }
}
