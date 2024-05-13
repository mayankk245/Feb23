import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('appHighlight') appHighlight:string ='';

@Input() backgroundColor?: string ='';

constructor(private elRef : ElementRef) { this.elRef.nativeElement.style.backgroundColor = this.appHighlight; }

  @HostListener('mouseleave') onMouseEnter(){
    this.elRef.nativeElement.style.backgroundColor =  this.appHighlight;
  }
  @HostListener('mouseover') onMouseLeave(){
    this.elRef.nativeElement.style.backgroundColor =  this.backgroundColor;
  }

ngOnInit(){
  this.elRef.nativeElement.style.backgroundColor = this.appHighlight;
}
}
