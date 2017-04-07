import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tags} from '../../models/tags';
import { Myprovider } from '../../providers/myprovider';
import {Categories} from '../../models/categories';
/**
 * Generated class for the Tags page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html',
})
export class TagsPage {
  tags : Tags[];
  cats : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private myprovider :Myprovider ) {
    // this.myprovider.loadTags().then(tags => {
    //   this.tags = tags;
    //   console.log(tags)
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tags');
  }

}
