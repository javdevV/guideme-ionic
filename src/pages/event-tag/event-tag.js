var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Myprovider } from '../../providers/myprovider';
import { Geolocation } from '@ionic-native/geolocation';
/*
 Generated class for the EventTag page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var EventTagPage = (function () {
    function EventTagPage(navCtrl, navParams, myprovider, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myprovider = myprovider;
        this.geolocation = geolocation;
        this.myprovider.loadTags().then(function (listtags) {
            _this.listtags = listtags;
            _this.originalTags = listtags;
            console.log(listtags);
        });
    }
    EventTagPage.prototype.loadUsersTags = function () {
        var _this = this;
        return this.myprovider.loadUsersTags().then(function (usersTags) {
            _this.usersTags = usersTags;
            console.log(usersTags);
        });
    };
    EventTagPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventTagPage');
        this.loadUsersTags();
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
    };
    EventTagPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = { center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP };
            console.log("latitude : " + position.coords.latitude);
            console.log("longitude : " + position.coords.longitude);
            _this.myprovider.updateUserPosition(position.coords.latitude, position.coords.longitude);
        }, function (err) {
            console.log(err);
        });
    };
    EventTagPage.prototype.search = function (event) {
        var _this = this;
        var term = event.target.value;
        if (term.trim() === '' || term.trim().length < 2) {
            this.listtags = this.originalTags;
        }
        else {
            this.myprovider.getTagByName(term).subscribe(function (listtags) {
                _this.listtags = listtags;
                console.log(_this.listtags);
            });
        }
    };
    EventTagPage.prototype.addTagToUser = function (tag) {
        this.myprovider.addTagToUser(tag);
    };
    EventTagPage.prototype.deleteTagFromUser = function (tag) {
        this.myprovider.deleteTagFromUser(tag);
    };
    return EventTagPage;
}());
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], EventTagPage.prototype, "mapElement", void 0);
EventTagPage = __decorate([
    Component({
        selector: 'page-event-tag',
        templateUrl: 'event-tag.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Myprovider, Geolocation])
], EventTagPage);
export { EventTagPage };
//# sourceMappingURL=event-tag.js.map