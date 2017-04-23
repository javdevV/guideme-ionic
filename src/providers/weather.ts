import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather {
  public apiKey: string = '';
  public conditionsUrl: string = '';
  public searchUrl: string;
  public alertUrl: string ='';
    //😀😀😀😀😀😀😀😀😀😀😀😀😀DOCUMENTATION EMTA3 EL WEATHER😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀
//https://www.wunderground.com/weather/api/d/docs
//😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀v
  constructor(private _http: Http) {
    this.apiKey = 'bc9e6b2f5532265e';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+ this.apiKey +'/conditions/q';
    this.alertUrl= 'http://api.wunderground.com/api/'+ this.apiKey +'/alerts/q';
    //https://nihongo.wunderground.com/weather/api/d/docs?d=autocomplete-api Documentation emta3 el autocomplete
    this.searchUrl = 'http://autocomplete.wunderground.com/aq?query=';
  }