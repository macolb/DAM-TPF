import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorear]'
})
export class ColorearDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter(){
    this.colorear('green');
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    this.colorear('');
  }

  colorear(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
