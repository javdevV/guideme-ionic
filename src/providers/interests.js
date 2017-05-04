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
  Generated class for the Interests provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Interests = (function () {
    function Interests(http) {
        this.http = http;
        this.url = "http://localhost:9000/api";
        console.log('Hello Interests Provider');
    }
    Interests.prototype.loadUsersInts = function () {
        var _this = this;
        if (this.usersints) {
            return Promise.resolve(this.usersints);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/api/loadUsersInts')
                .map(function (res) { return res.json().interests; })
                .subscribe(function (UsersInts) {
                _this.usersints = UsersInts;
                resolve(_this.usersints);
            });
        });
    };
    Interests.prototype.loadInterests = function () {
        var _this = this;
        if (this.ints) {
            return Promise.resolve(this.ints);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/interestapi')
                .map(function (res) { return res.json(); })
                .subscribe(function (tags) {
                _this.ints = tags;
                resolve(_this.ints);
            });
        });
    };
    Interests.prototype.addIntrToUser = function (tag) {
        var headers = new Headers();
        headers.append('content-Type', 'application/json');
        this.http.put('http://localhost:9000/api/addInterestToUser', (tag), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Interests.prototype.deleteIntrFromUser = function (tag) {
        var headers = new Headers();
        // let options ={p:JSON.stringify(tag),headers:headers};
        console.log("fct delete int");
        this.http.delete("http://localhost:9000/api/deleteInterestfromUser", tag)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return Interests;
}());
Interests = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Interests);
export { Interests };
//# sourceMappingURL=interests.js.map