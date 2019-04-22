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

//   serverElements = [{type: 'server', name: 'TestServer', content: 'just a test!'}];
  // constructor(){}
    
//   onServerElementAdded(event:any){
//         this.serverElements = event;
//   }
//   onChangeFirst(){
//     this.serverElements[0].name = 'Changed !';  
//   }
//   onDestroyFirst(){
//     this.serverElements.splice(0, 1);
//   }

// } 

// ----------------------------------acccount & new account ------------------------------------
accounts = [
  {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
];

onAccountAdded(newAccount: {name: string, status: string}) {
  this.accounts.push(newAccount);
}

onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  this.accounts[updateInfo.id].status = updateInfo.newStatus;
}
}



