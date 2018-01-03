"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var dog_service_1 = require("../common/dog.service");
var SocialShare = require("nativescript-social-share");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, dogService) {
        this.routerExtensions = routerExtensions;
        this.dogService = dogService;
        this.myItems = [];
        console.log('home constructor');
    }
    HomeComponent.prototype.share = function (url) {
        SocialShare.shareText(url);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogService.getNewList().then(function (response) {
            _this.myItems = response.message;
        });
        this.dogService.getList()
            .then(function (response) {
            console.log('response', response);
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "./home.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            dog_service_1.DogService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRkFBaUY7QUFDakYscURBQW1EO0FBQ25ELHVEQUF5RDtBQVF6RDtJQUlJLHVCQUNZLGdCQUFrQyxFQUNsQyxVQUFzQjtRQUR0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQU1ULE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLEdBQVc7UUFDYixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFSCxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDN0IsVUFBQyxRQUFZO1lBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3BDLENBQUMsQ0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7YUFDcEIsSUFBSSxDQUNELFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFsQ1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FPZ0Msb0NBQWdCO1lBQ3RCLHdCQUFVO09BTnpCLGFBQWEsQ0FvQ3hCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRixJQW9DRTtBQXBDVyxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgRG9nU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9kb2cuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIFxuICAgIG15SXRlbXMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgZG9nU2VydmljZTogRG9nU2VydmljZVxuICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIHNoYXJlKHVybDogc3RyaW5nKSB7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dCh1cmwpO1xuICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5kb2dTZXJ2aWNlLmdldE5ld0xpc3QoKS50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubXlJdGVtcyA9IHJlc3BvbnNlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kb2dTZXJ2aWNlLmdldExpc3QoKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gfVxuIl19