import { Component, OnInit } from '@angular/core';

import {MessageService} from './../services/message.service'
@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss']
})
export class DataSharingComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }
  
  sendMessage(){
    this.messageService.recieveMessage('This is data from subject')
  }

  clearMessage(){
    this.messageService.clearMessage()
  }

}
