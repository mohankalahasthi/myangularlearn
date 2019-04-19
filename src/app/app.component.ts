import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  // ---------------------inline css-----------------------
  // styles: [`
  //   h1{
  //     color: red;
  //   }
  //  `]
})
export class AppComponent {
  title = 'my-angular-learn';
  serverElements = [{type: 'server', name: 'TestServer', content: 'just a test!'}];
  constructor(){}
  
  
  
  onServerElementAdded(event:any){
        this.serverElements = event;
  }
}


