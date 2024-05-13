import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.scss']
})
export class InterceptorComponent implements OnInit {
  currentTab: string = 'e';
  toggle:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/products').subscribe((resp)=> {
      console.table(resp);
    });
    
    setTimeout( () => 
    this.http.get('https://dummyjson.com/carts').subscribe((resp)=> {
      console.table(resp);
    }) , 1000)
  }

  

  changeTab(currentTab:string){
    this.currentTab = currentTab;
  }

}
