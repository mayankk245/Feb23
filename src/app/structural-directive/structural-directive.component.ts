import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  currentTab: string = 'e';
  toggle:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(currentTab:string){
    this.currentTab = currentTab;
  }

}
