import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {
  @Input() details: {name: string, place:string, phone:string, address:string}


  constructor() { }

  ngOnInit() {
  }

}
