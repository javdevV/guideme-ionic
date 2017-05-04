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
import { NavController, NavParams } from 'ionic-angular';
import { Interests } from '../../providers/interests';
/*
Generated class for the Interests page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
var InterestsPage = (function () {
    function InterestsPage(navCtrl, navParams, myprovider) {
        //this.checkboxFields.forEach((field) => this.filters = false );
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myprovider = myprovider;
        this.checkboxFields = ["sourour", "dali"];
        this.shown = false;
    }
    InterestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestsPage');
        this.start();
    };
    InterestsPage.prototype.start = function () {
        var _this = this;
        this.myprovider.loadInterests().then(function (ints) {
            _this.ints = ints;
            // console.log(this.ints);
            // this.shown=true;
        });
        this.myprovider.loadUsersInts().then(function (userints) {
            _this.userints = userints;
            //console.log(this.userints);
            if (_this.userints)
                _this.shown = true;
        });
    };
    InterestsPage.prototype.isChecked = function (int) {
        /*console.log('cheking');
        console.log(this.shown);*/
        if (this.shown == true) {
            this.pos = this.userints.find(function (it) { return it.label == int.label; });
            //console.log(this.userints[this.pos]);
            if (!this.pos) {
                return false;
            }
            else {
                //console.log(this.userints[this.pos].label);
                return true;
            }
        }
    };
    InterestsPage.prototype.saveUserInts = function (event, int) {
        console.log("save fct");
        console.log("ckecked : " + int.checked);
        if (int.checked == true) {
            this.pos = this.userints.find(function (it) { return it.label == int.label; });
            console.log(this.pos);
            if (!this.pos) {
                //this.userints.push(int);
                console.log(int);
                this.myprovider.addIntrToUser(int);
            }
        }
        else if (int.checked == false) {
            this.pos = this.userints.findIndex(function (it) { return it.label == int.label; });
            console.log(this.pos);
            if (this.pos > -1) {
                //console.log(this.userints[this.pos].label);
                //this.userints.splice(this.pos,1);
                this.myprovider.deleteIntrFromUser(int);
            }
        }
    };
    return InterestsPage;
}());
InterestsPage = __decorate([
    Component({
        selector: 'page-interests',
        templateUrl: 'interests.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Interests])
], InterestsPage);
export { InterestsPage };
//# sourceMappingURL=interests.js.map