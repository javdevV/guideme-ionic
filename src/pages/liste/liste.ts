import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Locations } from '../../providers/locations';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html'
})
export class ListePage {


  constructor(public navCtrl: NavController, public locations: Locations) {

  }

  ionViewDidLoad() {
    console.log('Test Si marche');


  }

  viewLocation(event,location) {
    this.navCtrl.push(DetailPage, {
      "title":location.title,
      "latitude":location.latitude,
      "longitude":location.longitude,
      "ouverture":location.ouverture
      
    })
  }

}
