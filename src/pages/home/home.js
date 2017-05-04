var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { BeaconsPage } from '../beacons/beacons';
import { ReviewPage } from '../review/review';
import { ChatPage } from '../chat/chat';
import { ListePage } from '../liste/liste';
import { ProfilePage } from '../profile/profile';
import { WeatherPage } from '../weather/weather';
var HomePage = (function () {
    function HomePage() {
        this.tab1Root = BeaconsPage;
        this.tab2Root = MapPage;
        this.tab3Root = ListPage;
        this.tab4Root = ChatPage;
        this.tab5Root = ReviewPage;
        this.tab6Root = ListePage;
        this.tab11Root = WeatherPage;
        // tab7Root: any = EventTagPage;
        // tab8Root: any = EventCategoriesPage;
        this.tab9Root = ProfilePage;
    }
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map