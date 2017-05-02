import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BeaconsPage } from '../beacons/beacons';
import { ReviewPage } from '../review/review';
import { ChatPage } from '../chat/chat';
import { ListePage } from '../liste/liste';
import { EventTagPage } from '../event-tag/event-tag';
import { EventCategoriesPage } from '../event-categories/event-categories';
import { ProfilePage } from '../profile/profile';
import { EventsPage } from '../events/events';
import { WeatherPage } from '../weather/weather';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tab1Root: any = BeaconsPage;

    tab2Root: any = MapPage;
    tab3Root: any = ListPage;
    tab4Root: any = ChatPage;
    tab5Root: any = ReviewPage;
tab6Root: any = ListePage;
tab11Root: any = WeatherPage;
// tab7Root: any = EventTagPage;
// tab8Root: any = EventCategoriesPage;
 tab9Root: any = ProfilePage;
    constructor(){

    }

}