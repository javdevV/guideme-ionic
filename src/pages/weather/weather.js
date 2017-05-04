var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Weather } from './../../providers/weather';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
var WeatherPage = (function () {
    function WeatherPage(navCtrl, navParams, weatherService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherService = weatherService;
        this.storage = storage;
    }
    WeatherPage.prototype.ionViewDidLoad = function () {
        this.getDefaultCity();
    };
    WeatherPage.prototype.getQuery = function () {
        var _this = this;
        this.weatherService.searchCities(this.searchStr)
            .subscribe(function (res) {
            _this.results = res.RESULTS;
        });
    };
    WeatherPage.prototype.chooseCity = function (city) {
        var _this = this;
        this.results = [];
        this.weatherService.getWeather(city.zmw)
            .subscribe(function (res) {
            _this.weather = res.current_observation;
            // console.log(city.zmw);
        });
    };
    WeatherPage.prototype.getDefaultCity = function () {
        var _this = this;
        this.storage.get('city').then(function (val) {
            if (val != null) {
                _this.zmw = val.zmw;
                _this.weatherService.getWeather(_this.zmw)
                    .subscribe(function (res) {
                    _this.weather = res.current_observation;
                    console.log(res);
                });
            }
            else {
                _this.zmw = '00000.149.60715';
                _this.weatherService.getWeather(_this.zmw)
                    .subscribe(function (res) {
                    _this.weather = res.current_observation;
                    console.log(res);
                });
            }
        });
    };
    return WeatherPage;
}());
WeatherPage = __decorate([
    Component({
        selector: 'page-weather',
        templateUrl: 'weather.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Weather,
        Storage])
], WeatherPage);
export { WeatherPage };
//# sourceMappingURL=weather.js.map