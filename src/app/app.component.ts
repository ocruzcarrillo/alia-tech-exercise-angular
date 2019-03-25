import { Component } from '@angular/core';
/*import { WebsocketService } from "./websocket.service";
import { GymsService } from "./gyms.service";*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/*,
  providers: [WebsocketService, GymsService]*/
})
export class AppComponent {
  title = 'ISC Omar Cruz Carrillo - Alia Tech Excersice';
  
  private message = {
	"data": "",
	"gyms": "",
	"id": "",
    "action": "gyms",
    "option": "get"
  };
  
  constructor() { }
	  
  /*constructor(private gymsService: GymsService) {
    gymsService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.gymsService.messages.next(this.message);
    this.message = {
		"data": "",
		"gyms": "",
		"id": "",
		"action": "gyms",
		"option": "get"
	  };
  }*/
}
