import { Directive, Input } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAntiIf]'
})
export class AntiIfDirective {
  private notShow:boolean = false
  constructor(private vc:ViewContainerRef, private tempRef: TemplateRef<unknown>) { }
  

  @Input() set appAntiIf(val:boolean){
    this.notShow =  val;
    this.vc.clear();
    if(!this.notShow){
      this.vc.createEmbeddedView(this.tempRef);
    }
    else if(this.appAntiIfElseBlock){
      this.vc.createEmbeddedView(this.appAntiIfElseBlock);
    }
  }

  @Input() appAntiIfElseBlock?: TemplateRef<unknown>;


  ngOnInit(){
    this.vc.clear();
    if(!this.notShow){
      this.vc.createEmbeddedView(this.tempRef);
    }
    else if(this.appAntiIfElseBlock){
      this.vc.createEmbeddedView(this.appAntiIfElseBlock);
    }
  
  }

}
