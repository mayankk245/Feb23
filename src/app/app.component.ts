import { Component } from '@angular/core';
import { LoaderService } from './loader.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  user: boolean = false;

  constructor(private sr:TestService, public _loader:LoaderService){
  }

  ngOnInit(){
    this.sr.isValidUser.next(true);
    this.sr.check().subscribe((val) => {
      this.user = val;
    })
  }
}
