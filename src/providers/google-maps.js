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
import { Connectivity } from './connectivity';
import { Geolocation } from 'ionic-native';
var GoogleMaps = (function () {
    function GoogleMaps(connectivityService) {
        this.connectivityService = connectivityService;
        this.mapInitialised = false;
        this.markers = [];
    }
    GoogleMaps.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMaps.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMaps.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            Geolocation.getCurrentPosition().then(function (position) {
                // UNCOMMENT FOR NORMAL USE
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //let latLng = new google.maps.LatLng(40.713744, -74.009056);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                resolve(true);
                google.maps.event.addListener(_this.map, 'click', function (event) {
                    _this.clearMarkers();
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    var distanceToYou = _this.getDistanceBetweenPoints(event.latLng, position, 'miles').toFixed(2);
                    _this.geocodeLatLng(event.latLng, geocoder, infowindow, distanceToYou);
                });
            });
        });
    };
    GoogleMaps.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMaps.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMaps.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            _this.disableMap();
        }, false);
    };
    GoogleMaps.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    };
    // Transfer latLng to specified Address
    GoogleMaps.prototype.geocodeLatLng = function (latLng, geocoder, infowindow, distanceToYou) {
        var _this = this;
        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var marker = new google.maps.Marker({
                        position: latLng,
                        animation: google.maps.Animation.DROP,
                        map: _this.map
                    });
                    _this.markers.push(marker);
                    infowindow.setContent(results[1].formatted_address + '<p style="color: red;">' + distanceToYou + " miles from your location</p>");
                    infowindow.open(_this.map, marker);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    // Removes the markers from the map, but keeps them in the array.
    GoogleMaps.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    GoogleMaps.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
        this.markers = [];
    };
    //move this funciton from location.ts
    GoogleMaps.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat();
        var lon1 = start.lng();
        var lat2 = end.coords.latitude;
        var lon2 = end.coords.longitude;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log('distanceToYou ' + d);
        return d;
    };
    GoogleMaps.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    return GoogleMaps;
}());
GoogleMaps = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Connectivity])
], GoogleMaps);
export { GoogleMaps };
//# sourceMappingURL=google-maps.js.map