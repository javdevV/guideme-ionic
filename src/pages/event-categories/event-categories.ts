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
  uscat : any ;
  p:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _service:Catprovider) {
    this._service.loadCategories().then(x=>{
      this.listcat=x;
       })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCategoriesPage');
    this.loadUsersCategories();
  }
  search(event) {
    let term = event.target.value;
    if (term.trim() === '' || term.trim().length < 2) {
      this.listcat = this.orgcat;
    } else {
      this._service.getCatByName(term).subscribe(listcat => {
        this.listcat = listcat;
        console.log(this.listcat);
      });
    }
  }
  loadUsersCategories(){
    this._service.loadUsersCategories().then(uscat=>{
      this.p=uscat;
      if(this.p.length==0){
        this.p=['-1'];
      }
      this.p=uscat;
    });
  }
  addCatToUser(cat){
    this._service.addCatToUser(cat);
  }
    deleteCatFromUser(cat){
    this._service.deleteCatFromUser(cat);
  }


}
