import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  socket:any
  chat_input:string;
  chats = [];

  constructor(public navCtrl: NavController) {
    this.socket = io('http://localhost:9000');

    this.socket.on('message', (msg) => {
      console.log("message", msg);
      this.chats.push(msg);
    });
  }

  send(msg) {
        if(msg != ''){
            this.socket.emit('message', msg);
        }
        this.chat_input = '';
    }
}