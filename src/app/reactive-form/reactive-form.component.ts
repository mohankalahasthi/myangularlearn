import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male','female'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
     this.signupForm = new FormGroup({
        'username' : new FormControl(null),
        'email'  : new FormControl(null),
        'gender' : new  FormControl('male')
     });
  }

}
