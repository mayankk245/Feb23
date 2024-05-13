import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public dob:Date = new Date(1997,7,20);
  currentTab: string ='e';
  
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(currentTab:string){
    this.currentTab = currentTab;
  }

}
