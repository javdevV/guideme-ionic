import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { BeaconsPage } from '../pages/beacons/beacons';
import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { ListePage } from '../pages/liste/liste';
import { EventTagPage } from '../pages/event-tag/event-tag';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SlidePage } from '../pages/slide/slide';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   rootPage = LoginPage;
  //rootPage:any = 'LoginPage';

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
