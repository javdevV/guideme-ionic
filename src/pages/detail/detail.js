var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from "ionic-angular";
import { Locations } from '../../providers/locations';
// import { Http } from '@angular/http';
//import { ListPage } from '../list/list';
var DetailPage = (function () {
    function DetailPage(navParams, navCtrl) {
        this.navCtrl = navCtrl;
        this.title = navParams.get('title');
        this.latitude = navParams.get('latitude');
        this.longitude = navParams.get('longitude');
        this.ouverture = navParams.get('ouverture');
        console.log(this.title);
        console.log(this.latitude);
        console.log(this.ouverture);
    }
    DetailPage.prototype.ionViewDidLoad = function (err) {
        console.log(err);
    };
    DetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Component({
        selector: 'page-detail',
        templateUrl: 'detail.html',
        providers: [Locations]
        //entryComponents:[ ListPage ]
    }),
    __metadata("design:paramtypes", [NavParams, NavController])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.js.map