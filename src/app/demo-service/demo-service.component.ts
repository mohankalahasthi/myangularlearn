import { Component, OnInit } from "@angular/core";

import { DemoService } from "./../services/demo.service";
import { ServiceEnties } from "./../entites/serviceEntie";
import { Posts } from './../entites/post';
@Component({
  selector: "app-demo-service",
  templateUrl: "./demo-service.component.html",
  styleUrls: ["./demo-service.component.scss"]
})
export class DemoServiceComponent implements OnInit {
  constructor(private demoService: DemoService) {}
  comments: ServiceEnties[];
  posts : Posts[] ;
  ngOnInit() {
    this.demoService.getComment().subscribe(data => {
      console.log(data);
      this.comments = data;
    });

    this.demoService.getCommentByParameter().subscribe((data:Posts[]) =>{
      console.log(data);
      this.posts = data;
      console.log(this.posts);
    
    });
  }
}
