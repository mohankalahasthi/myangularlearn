import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class serverElementComponent implements OnInit {
  @Input() serverElementObj: { type: string , name: string , content: string}

  constructor() { }

  ngOnInit() {
  }


}
