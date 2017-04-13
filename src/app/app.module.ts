import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { ListPage } from '../pages/list/list';
import { Myprovider  } from '../providers/myprovider';
import { Catprovider  } from '../providers/catprovider';
import { EventTagPage } from '../pages/event-tag/event-tag';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';
import { ProfilePage } from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,    EventTagPage ,EventCategoriesPage,ProfilePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,EventTagPage,EventCategoriesPage,ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Myprovider,Catprovider,Geolocation
  ]
})
export class AppModule {}
