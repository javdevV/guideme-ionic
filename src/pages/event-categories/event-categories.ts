import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Catprovider} from '../../providers/catprovider'
import {Categories} from "../../models/categories";
// import {Categories} from '../../models/categories';
/*
  Generated class for the EventCategories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-categories',
  templateUrl: 'event-categories.html'
})
export class EventCategoriesPage {
  listcat : any;
  orgcat : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams,private myprovider:Catprovider) {
    this.myprovider.loadCategories().then(x=>{
      this.listcat=x;
      console.log(x);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCategoriesPage');
  }
  search(event) {
    let term = event.target.value;
    if (term.trim() === '' || term.trim().length < 2) {
      this.listcat = this.orgcat;
    } else {
      this.myprovider.getTagByName(term).subscribe(listcat => {
        this.listcat = listcat;
        console.log(this.listcat);
      });
    }
  }

}
