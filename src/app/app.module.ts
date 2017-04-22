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
      EventTagPage ,EventCategoriesPage,ProfilePage,EventsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    MapPage,
    ListPage,
    DetailPage,
    BeaconsPage,
     ReviewPage,
    AddReviewPage,
     ListePage,EventTagPage,EventCategoriesPage,ProfilePage,EventsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Todos,BeaconProvider,Locations,GoogleMaps, Connectivity,Reviews,
   Myprovider,Catprovider,Geolocation,Event]
})
export class AppModule {}
