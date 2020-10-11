import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topserve',
//   template: `
// <app-server></app-server>
// <app-server></app-server>
// `,
  templateUrl: './topserve.component.html',
  styleUrls: ['./topserve.component.css']
})
export class TopserveComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No sever was created';
  serverName='';
  serverCreated=false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Sever was created';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateSeverName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
