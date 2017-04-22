import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from "ionic-angular";
import { Locations} from '../../providers/locations';
// import { Http } from '@angular/http';

//import { ListPage } from '../list/list';





@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
    providers: [ Locations ]
    //entryComponents:[ ListPage ]
})


export class DetailPage {
    navParams: NavParams
    ouverture: any
    title: any
    latitude: any
    longitude: any
  


constructor(navParams: NavParams,public navCtrl: NavController) {

this.title = navParams.get('title'); 
this.latitude = navParams.get('latitude');
this.longitude = navParams.get('longitude');
this.ouverture = navParams.get('ouverture');

console.log(this.title);
console.log(this.latitude);
console.log(this.ouverture);
 }

    ionViewDidLoad(err) {
        console.log(err);


    }
    goBack() {
        this.navCtrl.pop();
    }


}
