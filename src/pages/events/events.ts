import { Component } from '@angular/core';
import { Event } from '../../providers/event';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  listevent : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private event :Event) {
    this.event.loadEvents().then(listevent => {
      this.listevent = listevent;
      this.listevent=listevent;
      console.log(listevent);
    })  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
