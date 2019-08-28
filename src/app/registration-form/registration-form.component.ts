import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
@ViewChild( "registrationform") signupForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

}
