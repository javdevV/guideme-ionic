var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { NavController, Platform, AlertController, Events } from 'ionic-angular';
import { Todos } from '../../providers/todos';
import { NgZone } from '@angular/core';
import { BeaconProvider } from '../../providers/beacon-provider';
import { LocalNotifications } from 'ionic-native';
import 'rxjs/Rx';
import { BeaconModel, } from '../../models/beacon-model';
import { ChatPage } from '../chat/chat';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
var BeaconsPage = (function () {
    function BeaconsPage(navCtrl, todoService, alertCtrl, platform, beaconProvider, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.beaconProvider = beaconProvider;
        this.events = events;
        this.tab1Root = ListPage;
        this.tab2Root = MapPage;
        this.beacons = [];
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.num = Math.floor(Math.random() * (16 - 1 + 1) + 1);
        LocalNotifications.on("click", function (notification, state) {
            var alert = _this.alertCtrl.create({
                title: _this.todos[_this.num].info.nom_du_musee,
                subTitle: _this.todos[_this.num].info.periode_ouverture + " " + _this.todos[_this.num].info.adr + "  site web  " + _this.todos[_this.num].info.sitweb,
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    BeaconsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.beaconProvider.initialise().then(function (isInitialised) {
                if (isInitialised) {
                    _this.listenToBeaconEvents();
                }
            });
        });
        this.todoService.getTodos().then(function (data) {
            _this.todos = data;
        });
    };
    BeaconsPage.prototype.schedule = function (title, text) {
        LocalNotifications.schedule({
            title: title,
            text: text,
            at: new Date(new Date().getTime() + 1 * 1000)
        });
    };
    BeaconsPage.prototype.chat = function () {
        this.navCtrl.push(ChatPage);
    };
    BeaconsPage.prototype.map = function () {
        this.navCtrl.push(MapPage);
    };
    BeaconsPage.prototype.listenToBeaconEvents = function () {
        var _this = this;
        this.events.subscribe('didRangeBeaconsInRegion', function (data) {
            // update the UI with the beacon list
            _this.zone.run(function () {
                _this.beacons = [];
                var beaconList = data.beacons;
                beaconList.forEach(function (beacon) {
                    var beaconObject = new BeaconModel(beacon);
                    _this.beacons.push(beaconObject);
                });
            });
        });
    };
    BeaconsPage.prototype.createTodo = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Museum',
            message: 'What do you need to add?',
            inputs: [
                {
                    name: 'title'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.todoService.createTodo({ title: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    BeaconsPage.prototype.updateTodo = function (todo) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit',
            message: 'Change your mind?',
            inputs: [
                {
                    name: 'title'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.todoService.updateTodo({
                            _id: todo._id,
                            _rev: todo._rev,
                            title: data.title
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    BeaconsPage.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    return BeaconsPage;
}());
BeaconsPage = __decorate([
    Component({
        selector: 'page-beacons',
        templateUrl: 'beacons.html'
    }),
    __metadata("design:paramtypes", [NavController, Todos, AlertController, Platform, BeaconProvider, Events])
], BeaconsPage);
export { BeaconsPage };
//# sourceMappingURL=beacons.js.map