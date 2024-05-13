import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userForm = new FormGroup({
    username :new FormControl(''),
    password :new FormControl(''),
  })
  public invalidCreds: boolean =false;

  constructor(private router:Router,private sr:TestService) { }

  ngOnInit(): void {
    this.sr.isValidUser.next(false);
  }

  login(){
    console.log(this.userForm.controls.username.value);
    console.log(this.userForm.controls.password.value);
    let uName =this.userForm.controls.username.value;
    let pass = this.userForm.controls.password.value
    if(uName == "Mayank" && pass == "test"){
      this.invalidCreds = false;
      this.sr.isValidUser.next(true);
      this.router.navigate(['/home/pipes'])
    }
    else{
      this.invalidCreds = true;
    }
    
  }

}
