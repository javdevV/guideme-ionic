import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams,Slides  } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the Slide page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {
 @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }
goToSlide() {
    this.slides.slideTo(2, 500);
  }

start(){
this.navCtrl.push(HomePage)

}

}
