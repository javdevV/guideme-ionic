import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather {
  public apiKey: string = '';
  public conditionsUrl: string = '';
  public searchUrl: string;
  public alertUrl: string ='';}