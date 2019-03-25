import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

const URL = "wss://p2pfo5t498.execute-api.us-east-1.amazonaws.com/gyms";

export interface Message {
  data: any;
  gyms: any;
  id: any;
  option: any;
  action: any;
}

@Injectable()
export class GymsService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(URL).map(
      (response: MessageEvent): Message => {
		  console.log(response);
        let data = JSON.parse(response.data);
		console.log(data);
        return {
          data: data.data,
		  gyms: data.gyms,
		  id: data.id,
		  option: data.option,
		  action: data.action
        };
      }
    );
  }
}
