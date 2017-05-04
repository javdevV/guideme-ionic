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
import { NavController, NavParams } from 'ionic-angular';
import { EventTagPage } from '../event-tag/event-tag';
import { EventCategoriesPage } from '../event-categories/event-categories';
import { EventsPage } from '../events/events';
import { InterestsPage } from '../interests/interests';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProfilePage = (function () {
    //tagPage : EventTagPage;
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToTag = function () {
        this.navCtrl.push(EventTagPage);
    };
    ProfilePage.prototype.goToCat = function () {
        this.navCtrl.push(EventCategoriesPage);
    };
    ProfilePage.prototype.goToEvent = function () {
        this.navCtrl.push(EventsPage);
    };
    ProfilePage.prototype.goToInterests = function () {
        this.navCtrl.push(InterestsPage);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map