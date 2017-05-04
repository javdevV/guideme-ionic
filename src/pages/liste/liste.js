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
import { Locations } from '../../providers/locations';
import { DetailPage } from '../detail/detail';
var ListePage = (function () {
    function ListePage(navCtrl, locations) {
        this.navCtrl = navCtrl;
        this.locations = locations;
    }
    ListePage.prototype.ionViewDidLoad = function () {
        console.log('Test Si marche');
    };
    ListePage.prototype.viewLocation = function (event, location) {
        this.navCtrl.push(DetailPage, {
            "title": location.title,
            "latitude": location.latitude,
            "longitude": location.longitude,
            "ouverture": location.ouverture
        });
    };
    return ListePage;
}());
ListePage = __decorate([
    Component({
        selector: 'page-liste',
        templateUrl: 'liste.html'
    }),
    __metadata("design:paramtypes", [NavController, Locations])
], ListePage);
export { ListePage };
//# sourceMappingURL=liste.js.map