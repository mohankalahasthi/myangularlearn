import { Component, OnInit } from "@angular/core";
import {MessageService} from './../services/message.service'
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
  message:any

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.message = this.messageService.getMessage();
    console.log(this.message)
    this.a();
  }

  
  a(){
    let tempArray:any = [];
    this.dummyArray.forEach(ele => {
      if(ele.name === 'user'){
        tempArray.push(ele);
      }
    })

    console.log(tempArray);
  }




}
