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
import { NavController, ModalController } from 'ionic-angular';
import { AddReviewPage } from '../add-review-page/add-review-page';
import { Reviews } from '../../providers/reviews';
var ReviewPage = (function () {
    function ReviewPage(nav, reviewService, modalCtrl) {
        this.nav = nav;
        this.reviewService = reviewService;
        this.modalCtrl = modalCtrl;
        this.reviews = [];
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reviewService.getReviews().then(function (data) {
            console.log(data);
            _this.reviews = data;
        });
    };
    ReviewPage.prototype.addReview = function () {
        var _this = this;
        var modal = this.modalCtrl.create(AddReviewPage);
        modal.onDidDismiss(function (review) {
            if (review) {
                _this.reviews.push(review);
                _this.reviewService.createReview(review);
            }
        });
        modal.present();
    };
    ReviewPage.prototype.deleteReview = function (review) {
        //Remove locally
        var index = this.reviews.indexOf(review);
        if (index > -1) {
            this.reviews.splice(index, 1);
        }
        //Remove from database
        this.reviewService.deleteReview(review._id);
    };
    return ReviewPage;
}());
ReviewPage = __decorate([
    Component({
        selector: 'review-page',
        templateUrl: 'review.html'
    }),
    __metadata("design:paramtypes", [NavController, Reviews, ModalController])
], ReviewPage);
export { ReviewPage };
//# sourceMappingURL=review.js.map