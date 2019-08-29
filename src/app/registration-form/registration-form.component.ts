import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import {SignUp} from './signup.entity';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
@ViewChild( "registrationform") signupForm: NgForm;
signUpDetails:SignUp;
  constructor() {
    console.log(this.signUpDetails);
    this.signUpDetails = new SignUp();
    console.log(this.signUpDetails);

   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    console.log(this.signUpDetails);
    
  }
}
