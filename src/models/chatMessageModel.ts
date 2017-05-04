

export class ChatMessageModel {

  public id:string;
  public senderId:string;
  public message:string;
  public timestamp:number;

  public image:string;
  public isMe:boolean;
  private time:string;

  constructor(senderId, message){
    this.id = '';
    this.senderId = senderId || '';
    this.message = message || '';
    this.timestamp = 0;
    this.isMe = false;
    this.time = new Date(this.timestamp).toLocaleTimeString();
  }

  public setTimestamp(timestamp:number){
    this.timestamp = timestamp;
    this.time = new Date(this.timestamp).toLocaleTimeString();
  }

  public getTime() : string {
    return this.time;
  }

  

  
}
