/**
 * Created by javdev on 4/7/2017.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Myprovider} from  '../../providers/myprovider';
import {Categories} from "../../models/categories";
@Component({
  selector: 'page-allcategories',
  templateUrl: 'allcategories.html'
})
export class AllcategoriesPage {
  listcat : Categories[];
  constructor(public navCtrl: NavController,private myprovider : Myprovider) {
    this.myprovider.loadCategories().then(listcat => { this.listcat = listcat; });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllreviewsPage');
  }
}
