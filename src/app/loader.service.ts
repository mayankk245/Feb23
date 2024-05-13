import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader = new BehaviorSubject<boolean>(false);

  constructor() { 

  }
  public showLoader(){
    return this.loader.next(true);
  }

  public hideLoader(){
    return this.loader.next(false);
  }
}
