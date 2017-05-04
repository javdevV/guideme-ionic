  import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Chats {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getChats(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      
      this.http.get('http://localhost:9000/api/chat').map(res=>res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  createChat(chat){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:9000/api/chat', JSON.stringify(chat), {headers: headers})
    .subscribe(res => {
      console.log(res.json());
    });
  }


}