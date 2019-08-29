import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonobject',
  templateUrl: './jsonobject.component.html',
  styleUrls: ['./jsonobject.component.scss']
})
export class JsonobjectComponent implements OnInit {
  json : any;
  
  details:any = {
    name: 'pradeep',
    place: 'rajahmundry'
  };
  address: any = {
    street: 'kvr swamy road',
    city:'rajahmundry',
    pincode:'533101'
  };
  abc: any = {
      x: '10',
      y:'20',
      z: '30'
    }
    stringifiedAddress : any;
    parsedAddress : any;


  constructor() { 
    console.log(this.address);
    this.stringifiedAddress = JSON.stringify(this.address);
    console.log(this.stringifiedAddress);
    console.log(typeof this.stringifiedAddress);
    this.parsedAddress = JSON.parse(this.stringifiedAddress);
    console.log(this.parsedAddress);
    console.log(typeof this.parsedAddress)
  }

  ngOnInit() {
  }

  }
