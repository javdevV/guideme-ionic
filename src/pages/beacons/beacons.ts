import { Component } from "@angular/core";
import { NavController,Platform, AlertController,Events  } from 'ionic-angular';
import { Todos } from '../../providers/todos';
import { NgZone } from '@angular/core';
import { IBeacon } from 'ionic-native';
import { BeaconProvider } from '../../providers/beacon-provider';
import {LocalNotifications} from 'ionic-native';
import 'rxjs/Rx';
import { BeaconModel, } from '../../models/beacon-model';
import {ChatPage} from '../chat/chat';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { DetailPage } from '../detail/detail';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
@Component({
  selector: 'page-beacons',
  templateUrl: 'beacons.html'
})





export class BeaconsPage {
   username = '';
  email = '';
tab1Root:any=ListPage;
tab2Root:any=MapPage;
  todos: any;
beacons: BeaconModel[] = [];
zone: any;
num:any;
  constructor(public navCtrl: NavController, public todoService: Todos, public alertCtrl: AlertController,public platform: Platform,public beaconProvider: BeaconProvider, public events: Events,private auth: AuthService) {
  this.zone = new NgZone({ enableLongStackTrace: false });
  this.num=Math.floor(Math.random()*(16-1+1)+1);
  LocalNotifications.on("click", (notification, state) => {

              let alert = this.alertCtrl.create({
                  title: this.todos[this.num].info.nom_du_musee,
                  subTitle: this.todos[this.num].info.periode_ouverture+" "+this.todos[this.num].info.adr+"  site web  "+this.todos[this.num].info.sitweb,
                  buttons: [


                  {
                    text:'OK',
                    handler:()=>{
                     

                    }
                  }

                  ]
              });
              alert.present()
          });

let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];


 




    }




  ionViewDidLoad(){

this.platform.ready().then(() => {
this.beaconProvider.initialise().then((isInitialised) => {
if (isInitialised) {
this.listenToBeaconEvents();
}
});
});
    this.todoService.getTodos().then((data) => {
      this.todos = data;
    });

  }



 



public schedule(title, text) {
        LocalNotifications.schedule({
            title,
            text,
            at: new Date(new Date().getTime() + 1* 1000)    
            
        });
    }


  
 public chat(){


   this.navCtrl.push(ChatPage);
 }

public map(){

this.navCtrl.push(MapPage) ; 
}
 






public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)


    });
}






  listenToBeaconEvents() {
this.events.subscribe('didRangeBeaconsInRegion', (data) => {

// update the UI with the beacon list
this.zone.run(() => {

this.beacons = [];

let beaconList = data.beacons;
beaconList.forEach((beacon) => {
let beaconObject = new BeaconModel(beacon);
this.beacons.push(beaconObject);
});

});

});
}

  createTodo(){

    let prompt = this.alertCtrl.create({
      title: 'Add Museum',
      message: 'What do you need to add?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.createTodo({title: data.title});
          }
        }
      ]
    });

    prompt.present();

  }

  updateTodo(todo){

    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Change your mind?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.updateTodo({
              _id: todo._id,
              _rev: todo._rev,
              title: data.title
            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  }



























}




