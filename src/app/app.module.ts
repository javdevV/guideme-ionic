import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Todos } from '../providers/todos';
import { BeaconProvider } from '../providers/beacon-provider';
import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { BeaconsPage } from '../pages/beacons/beacons';
import { AddReviewPage } from '../pages/add-review-page/add-review-page';
import { Reviews } from '../providers/reviews';
import { HttpModule } from '@angular/http';
import { ReviewPage } from '../pages/review/review';
import { Geolocation } from '@ionic-native/geolocation';
import { ListePage } from '../pages/liste/liste';
import { Myprovider  } from '../providers/myprovider';
import { Event  } from '../providers/event';
import { Catprovider  } from '../providers/catprovider';
import { EventTagPage } from '../pages/event-tag/event-tag';
import { EventCategoriesPage } from '../pages/event-categories/event-categories';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { WeatherPage } from '../pages//weather/weather';
import { Weather } from './../providers/weather';

import { InterestsPage } from '../pages/interests/interests';
import { Interests } from './../providers/interests';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from './../providers/auth-service';
import { SlidePage } from '../pages/slide/slide';
import {ChatBubble} from '../components/chatBubble/chatBubble';
import {ElasticTextarea} from '../components/elasticTextarea';
import { Chats } from '../providers/chats';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    MapPage,
    ListPage,
     ListePage,
    DetailPage,
    BeaconsPage,
    ReviewPage,
    AddReviewPage,
       WeatherPage,
      EventTagPage ,EventCategoriesPage,ProfilePage,EventsPage,
      LoginPage,RegisterPage,SlidePage,ChatBubble,
      ElasticTextarea,InterestsPage


  ],
  imports: [
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    MapPage,
    ListPage,
       WeatherPage,
    DetailPage,
    BeaconsPage,
     ReviewPage,
    AddReviewPage,
     ListePage,EventTagPage,EventCategoriesPage,ProfilePage,EventsPage,LoginPage,RegisterPage,
     SlidePage,InterestsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Todos,BeaconProvider,Locations,GoogleMaps,Weather, Connectivity,Reviews,
   Myprovider,Catprovider,Geolocation,Event,AuthService,Chats,Interests]

})
export class AppModule {}
