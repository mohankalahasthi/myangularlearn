import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  name = 'mohanpradeep';
  surname = 'kalahasthi';
  place = 'Rajahmundry';

  activeButton = false;

  serverCreationStatus = 'No server created';

  getServerStatus() {
    return this.place;
  }


  constructor() {
    setTimeout(() => {
      this.activeButton = true;
    }, 2000);
     

  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

}
