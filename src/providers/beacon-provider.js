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
import { Platform, Events } from 'ionic-angular';
import { IBeacon } from 'ionic-native';
var BeaconProvider = (function () {
    function BeaconProvider(platform, events) {
        this.platform = platform;
        this.events = events;
    }
    BeaconProvider.prototype.initialise = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // we need to be running on a device
            if (_this.platform.is('cordova')) {
                // Request permission to use location on iOS
                IBeacon.requestAlwaysAuthorization();
                // create a new delegate and register it with the native layer
                _this.delegate = IBeacon.Delegate();
                // Subscribe to some of the delegate’s event handlers
                _this.delegate.didRangeBeaconsInRegion()
                    .subscribe(function (data) {
                    _this.events.publish('didRangeBeaconsInRegion', data);
                }, function (error) { return console.error(); });
                // setup a beacon region – CHANGE THIS TO YOUR OWN UUID
                _this.region = IBeacon.BeaconRegion("estimode", "ebefd083-70a2-47c8-9837-e7b5634df557");
                // start ranging
                IBeacon.startRangingBeaconsInRegion(_this.region)
                    .then(function () {
                    resolve(true);
                }, function (error) {
                    console.error("Failed to begin monitoring: ", error);
                    resolve(false);
                });
            }
            else {
                console.error("This application needs to be running on a device");
                resolve(false);
            }
        });
        return promise;
    };
    return BeaconProvider;
}());
BeaconProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Platform, Events])
], BeaconProvider);
export { BeaconProvider };
//# sourceMappingURL=beacon-provider.js.map