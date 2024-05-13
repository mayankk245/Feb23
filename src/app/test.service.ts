import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  isValidUser =  new Subject<boolean>();
  check(){
    return this.isValidUser

  }
}
