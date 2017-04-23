import { Weather } from './../../providers/weather';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {

  public zmw: string; //elle fait référence lel city el ZMW  ¯\_(ツ)_/¯ 
  public weather: any;
  public searchStr: string;
  public results: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private weatherService: Weather,
    private storage: Storage) {
      
    }

  ionViewDidLoad() {
    
    
  }

  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  chooseCity(city) {
    this.results = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(res => {
        this.weather = res.current_observation;
     
        // console.log(city.zmw);
});
}


