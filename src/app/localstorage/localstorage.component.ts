import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent implements OnInit {
  key : any ;
  firstName: any = "firstName" ;
  localStorageValue:string;


  details:any = {
    name: 'pradeep',
    place: 'rajahmundry'
  };
  address: any = {
    street: 'kvr swamy road',
    city:'rajahmundry',
    pincode:'533101'
  };

  constructor() { 
    this.key = "10";
    localStorage.clear();
  }

  ngOnInit() {
    localStorage.setItem(this.firstName, 'pradeep');
    localStorage.setItem('address', JSON.stringify(this.address));
    localStorage.setItem('city', this.address.city);
    this.localStorageGet();

  }
  localStorageGet(){
    this.localStorageValue = localStorage.getItem(this.firstName);
    console.log(this.localStorageValue)
    console.log(localStorage.getItem('address'))
    console.log(JSON.parse(localStorage.getItem('address')).pincode);
    this.localStorageRemove();

  }
  localStorageRemove(){
    localStorage.removeItem(this.firstName);
    localStorage.removeItem('city');
    localStorage.removeItem('address');

  }
  
}
