import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format: any;
  constructor(private el: ElementRef) {}
  @HostListener('focus') onFocus() {
    console.log('focus');
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLocaleLowerCase();
    this.el.nativeElement.value = value.toUpperCase();
  }
}
