import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"]
})
export class ReactiveFormComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        //nested FormGroup
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl("male", Validators.required),
      hobbies: new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
}
