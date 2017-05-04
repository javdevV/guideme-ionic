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
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Event provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Event = (function () {
    function Event(http) {
        this.http = http;
        console.log('Hello Event Provider');
    }
    Event.prototype.loadEvents = function () {
        var _this = this;
        // return this.http.get(`http://localhost:3000/api/evenrs/`)
        //   .map(res => res.json());
        if (this.events) {
            return Promise.resolve(this.events);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:9000/api/events')
                .map(function (res) { return res.json(); })
                .subscribe(function (events) {
                _this.events = events;
                resolve(_this.events);
            });
        });
    };
    return Event;
}());
Event = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Event);
export { Event };
//# sourceMappingURL=event.js.map