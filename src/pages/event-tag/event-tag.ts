import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Myprovider} from '../../providers/myprovider'
import {Tags} from '../../models/tags';
import {Geolocation} from '@ionic-native/geolocation';
declare var google;

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
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  originalTags: Tags[];
  listtags: Tags[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private myprovider: Myprovider, public geolocation: Geolocation) {
    this.myprovider.loadTags().then(listtags => {
      this.listtags = listtags;
      this.originalTags=listtags;
       console.log(listtags);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventTagPage');
    this.loadMap();
    // var a = this;
    // setInterval(function () {
    //   a.geolocation.getCurrentPosition().then((position) => {
    //
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     console.log(latLng);
    //
    //     console.log("latitude : "+position.coords.latitude) ;
    //     console.log("longitude : "+position.coords.longitude) ;
    //
    //   }, (err) => {
    //     console.log(err);
    //   });
    //
    // },3000);
    // a.geolocation.watchPosition().subscribe((position) => {
    //   this.x = position.coords.longitude;
    //   this.y = position.coords.latitude;
    //   let latLng = new google.maps.LatLng(this.x, this.y);
    //       console.log("latitude : "+this.x) ;
    //       console.log("longitude : "+this.y) ;
    //   this.myprovider.updateUserPosition(this.x ,this.y);
    // }, (err) => {
    //   console.log(err);
    // });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP};
      console.log("latitude : " + position.coords.latitude);
      console.log("longitude : " + position.coords.longitude);
      this.myprovider.updateUserPosition(position.coords.latitude, position.coords.longitude);

    }, (err) => {
      console.log(err);
    });
  }

  search(event) {
    let term = event.target.value;
    if (term.trim() === '' || term.trim().length < 2) {
      this.listtags = this.originalTags;
    } else {
      this.myprovider.getTagByName(term).subscribe(listtags => {
        this.listtags = listtags;
        console.log(this.listtags);
      });
    }
  }
}
