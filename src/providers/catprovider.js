var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Catprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Catprovider = (function () {
    function Catprovider(http) {
        this.http = http;
        console.log('Hello Catprovider Provider');
    }
    Catprovider.prototype.loadCategories = function () {
        var _this = this;
        if (this.categories) {
            return Promise.resolve(this.categories);
        }
        return new Promise(function (resolve) {
            _this.http.get("http://localhost:9000/api/categories")
                .map(function (res) { return res.json(); })
                .subscribe(function (categories) {
                _this.categories = categories;
                resolve(_this.categories);
            });
        });
    };
    Catprovider.prototype.getCatByName = function (name) {
        return this.http.get("http://localhost:9000/api/getCatByName/" + name)
            .map(function (res) { return res.json(); });
    };
    Catprovider.prototype.loadUsersCategories = function () {
        var _this = this;
        if (this.usersCats) {
            return Promise.resolve(this.usersCats);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/api/loadUsersCats')
                .map(function (res) { return res.json().evt_categories; })
                .subscribe(function (usersCats) {
                _this.usersCats = usersCats;
                resolve(_this.usersCats);
            });
        });
    };
    Catprovider.prototype.addCatToUser = function (cat) {
        var headers = new Headers();
        headers.append('content-Type', 'application/json');
        this.http.put('http://localhost:9000/api/addCatToUser', JSON.stringify(cat), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Catprovider.prototype.deleteCatFromUser = function (cat) {
        var headers = new Headers();
        // let options ={p:JSON.stringify(tag),headers:headers};
        this.http.delete("http://localhost:9000/api/delCatFromUser", cat)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return Catprovider;
}());
Catprovider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Catprovider);
export { Catprovider };
//# sourceMappingURL=catprovider.js.map