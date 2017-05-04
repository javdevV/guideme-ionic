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
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';
var ChatPage = (function () {
    function ChatPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.chats = [];
        this.socket = io('http://localhost:9000');
        this.socket.on('message', function (msg) {
            console.log("message", msg);
            _this.chats.push(msg);
        });
    }
    ChatPage.prototype.send = function (msg) {
        if (msg != '') {
            this.socket.emit('message', msg);
        }
        this.chat_input = '';
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Component({
        selector: 'page-chat',
        templateUrl: 'chat.html'
    }),
    __metadata("design:paramtypes", [NavController])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.js.map