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
var Myprovider = (function () {
    function Myprovider(http) {
        this.http = http;
        this.url = "http://localhost:9000/api";
        console.log('Hello Myprovider Provider');
    }
    Myprovider.prototype.loadUsersTags = function () {
        var _this = this;
        // return this.http.get(`http://localhost:3000/api/loadUsersTAgs`)
        //   .map(res => <UsersTags[]>res.json().evt_tag);
        if (this.usersTags) {
            return Promise.resolve(this.usersTags);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/api/loadUsersTAgs')
                .map(function (res) { return res.json().evt_tags; })
                .subscribe(function (UsersTags) {
                _this.usersTags = UsersTags;
                resolve(_this.usersTags);
            });
        });
    };
    Myprovider.prototype.loadTags = function () {
        var _this = this;
        if (this.tags) {
            return Promise.resolve(this.tags);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/api/tags')
                .map(function (res) { return res.json(); })
                .subscribe(function (tags) {
                _this.tags = tags;
                resolve(_this.tags);
            });
        });
    };
    Myprovider.prototype.updateUserPosition = function (x, y) {
        var headers = new Headers();
        headers.append('content-Type', 'application/json');
        this.http.put('http://localhost:9000/api/updateUserPosition', JSON.stringify({ "latitude": x, "longitude": y }), { headers: headers })
            .subscribe(function (res) {
            //  console.log(res.json());
        });
    };
    Myprovider.prototype.getTagByName = function (name) {
        return this.http.get("http://localhost:9000/api/getTagByTitle/" + name)
            .map(function (res) { return res.json(); });
    };
    Myprovider.prototype.addTagToUser = function (tag) {
        var headers = new Headers();
        headers.append('content-Type', 'application/json');
        this.http.put('http://localhost:9000/api/addTagToUser', JSON.stringify(tag), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    Myprovider.prototype.deleteTagFromUser = function (tag) {
        var headers = new Headers();
        // let options ={p:JSON.stringify(tag),headers:headers};
        this.http.delete("http://localhost:9000/api/deleteTagfromUser", tag)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    return Myprovider;
}());
Myprovider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Myprovider);
export { Myprovider };
//# sourceMappingURL=myprovider.js.map