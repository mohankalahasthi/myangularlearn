import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.scss"]
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild("td") signupForm: NgForm;

  constructor() {}

  ngOnInit() {}
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}
