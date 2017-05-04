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
import { Catprovider } from '../../providers/catprovider';
// import {Categories} from '../../models/categories';
/*
  Generated class for the EventCategories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventCategoriesPage = (function () {
    function EventCategoriesPage(navCtrl, navParams, _service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._service = _service;
        this._service.loadCategories().then(function (x) {
            _this.listcat = x;
        });
    }
    EventCategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventCategoriesPage');
        this.loadUsersCategories();
    };
    EventCategoriesPage.prototype.search = function (event) {
        var _this = this;
        var term = event.target.value;
        if (term.trim() === '' || term.trim().length < 2) {
            this.listcat = this.orgcat;
        }
        else {
            this._service.getCatByName(term).subscribe(function (listcat) {
                _this.listcat = listcat;
                console.log(_this.listcat);
            });
        }
    };
    EventCategoriesPage.prototype.loadUsersCategories = function () {
        var _this = this;
        this._service.loadUsersCategories().then(function (uscat) {
            _this.p = uscat;
            if (_this.p.length == 0) {
                _this.p = ['-1'];
            }
            _this.p = uscat;
        });
    };
    EventCategoriesPage.prototype.addCatToUser = function (cat) {
        this._service.addCatToUser(cat);
    };
    EventCategoriesPage.prototype.deleteCatFromUser = function (cat) {
        this._service.deleteCatFromUser(cat);
    };
    return EventCategoriesPage;
}());
EventCategoriesPage = __decorate([
    Component({
        selector: 'page-event-categories',
        templateUrl: 'event-categories.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Catprovider])
], EventCategoriesPage);
export { EventCategoriesPage };
//# sourceMappingURL=event-categories.js.map