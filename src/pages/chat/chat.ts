import {Component, ViewChild, NgZone} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Http } from '@angular/http';
import {ChatMessageModel} from '../../models/chatMessageModel';
import { Chats } from '../../providers/chats';
import { HomePage } from '../../pages/home/home';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  @ViewChild('txtChat') txtChat:any;
  @ViewChild('content') content:any;
  public messages:any[];
  public contact:any;
  public userId:string;
  public userName:string;
  public userPicture:string;
  public groupId:string;
msg:any;
timestamp:any;
time:any
  constructor(public nav: NavController,public ChatsService: Chats,public navParams: NavParams,private zone: NgZone,public http: Http) {
   
          
      
  
  }




ionViewDidLoad(){
 
    this.ChatsService.getChats().then((data) => {
      console.log(data);
      this.messages = data;
    });
 
  }








  public sendMessage(){

 

    this.txtChat.setFocus();

    let chatMessage = new ChatMessageModel(
      this.userId,
      this.txtChat.content

      )
     this.msg={

     }
     this.time=new Date();
this.messages.push(chatMessage);
        this.ChatsService.createChat(chatMessage); 
    this.txtChat.clearInput();
  }

 doRefresh(refresher) {
   this.ChatsService.getChats().then((data) => {
      console.log(data);
      this.messages = data;
    });
    console.log('Begin async operation', refresher);
    setTimeout(() => {

      console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }












}
