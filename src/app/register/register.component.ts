import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  details=[
    {
      name: 'pradeep',
      place: 'rajahmundry',
      phone: '8801799750',
      address: 'kvr seamy road'
    }
  ]


  constructor() { }

  ngOnInit() {
  }
 
  formAdd(newForm:{name:string, place:string, phone:string, address:string}){
    this.details.push(newForm);

  }
  clear(clearForm:{}){
    this.details=[]
  }

}
