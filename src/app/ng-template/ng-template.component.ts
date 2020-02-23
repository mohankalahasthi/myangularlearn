import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-template",
  templateUrl: "./ng-template.component.html",
  styleUrls: ["./ng-template.component.scss"]
})
export class NgTemplateComponent implements OnInit {
  dummyArray: Array<any> = [
    {
      name: "Admin",
      age: 36,
      rights: ["admin", "editor", "contributor"]
    },
    {
      name: "SuperAdmin",
      age: 12,
      rights: ["admin", "editor", ]
    },
    {
      name: "user",
      age: 26,
      rights: [ "contributor"]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
