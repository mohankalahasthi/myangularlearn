import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName:any = '';
  newServerContent:any = '';
  serverElements: any= [];
  @Output() serverElementAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    this.serverElements.push({
      type:'server',
      name: this.newServerName,
      content: this.newServerContent
    });
    this.serverElementAdded.emit(this.serverElements);
  }
onAddBlueprint(){
  this.serverElements.push({
    type: 'blueprint',
    name: this.newServerName,
    content: this.newServerContent
  });
}


}
