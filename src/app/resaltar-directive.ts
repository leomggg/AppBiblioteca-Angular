import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltarDirective]'
})
export class ResaltarDirective {

  @HostBinding('class.ratonEncima') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  constructor() { }

}
