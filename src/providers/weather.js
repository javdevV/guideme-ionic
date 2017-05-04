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
var Weather = (function () {
    //😀😀😀😀😀😀😀😀😀😀😀😀😀DOCUMENTATION EMTA3 EL WEATHER😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀
    //https://www.wunderground.com/weather/api/d/docs
    //😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀v
    function Weather(_http) {
        this._http = _http;
        this.apiKey = '';
        this.conditionsUrl = '';
        this.alertUrl = '';
        this.apiKey = 'bc9e6b2f5532265e';
        this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
        this.alertUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/alerts/q';
        //https://nihongo.wunderground.com/weather/api/d/docs?d=autocomplete-api Documentation emta3 el autocomplete
        this.searchUrl = 'http://autocomplete.wunderground.com/aq?query=';
    }
    //👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴
    // https://www.wunderground.com/cgi-bin/findweather/
    //J'ai droit qu'a 10 req par 60 sc  et 500 par jour  Autre que ça lezmna on paye :/ 
    //👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴👴
    Weather.prototype.getWeather = function (zmw) {
        return this._http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
            .map(function (res) { return res.json(); });
    };
    // haw pour mieux comprendre http://www.nws.noaa.gov/os/vtec/pdfs/VTEC_explanation6.pdf
    Weather.prototype.getAlert = function (zmw) {
        return this._http.get(this.alertUrl + '/zmw:' + zmw + '.json')
            .map(function (res) { return res.json(); });
    };
    Weather.prototype.searchCities = function (searchStr) {
        return this._http.get(this.searchUrl + '' + searchStr)
            .map(function (res) { return res.json(); });
    };
    return Weather;
}());
Weather = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Weather);
export { Weather };
//# sourceMappingURL=weather.js.map