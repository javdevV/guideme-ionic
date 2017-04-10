import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Myprovider} from '../../providers/myprovider'
import {Tags} from '../../models/tags';

/*
  Generated class for the EventTag page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-tag',
  templateUrl: 'event-tag.html'
})
export class EventTagPage {
  listtags : Tags[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private myprovider :Myprovider) {
    this.myprovider.loadTags().then(listtags=>{
      this.listtags=listtags;
      console.log(listtags);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventTagPage');
  }

}
