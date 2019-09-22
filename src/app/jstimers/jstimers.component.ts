import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jstimers',
  templateUrl: './jstimers.component.html',
  styleUrls: ['./jstimers.component.scss']
})
export class JstimersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // setInterval(()=>{
    //   alert('Session Expired')
    // }, 10000);
  }
  sayHello(){
    setTimeout(() => {
      alert('SetTimeout Function'); 
    }, 2000);      
  }
  sayHi(){   
     
  }
    
  
}
