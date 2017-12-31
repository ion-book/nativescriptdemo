"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var HomeComponent = (function () {
    function HomeComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.myItems = [
            { name: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
            { name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png' },
            { name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png' },
            { name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg' },
            { name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png' }
        ];
    }
    HomeComponent.prototype.gobackHistory = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "./home.component.html",
            styleUrls: ["home.component.css"],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_extensions_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsbUZBQWlGO0FBUWpGO0lBU0ksdUJBQ1ksTUFBYyxFQUNkLGdCQUFrQztRQURsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVY5QyxZQUFPLEdBQUc7WUFDTixFQUFFLElBQUksRUFBRyxTQUFTLEVBQUcsR0FBRyxFQUFFLDZIQUE2SCxFQUFDO1lBQ3hKLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsc0VBQXNFLEVBQUM7WUFDcEcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxzREFBc0QsRUFBQztZQUNwRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLDhFQUE4RSxFQUFDO1lBQzFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsMERBQTBELEVBQUM7U0FDbkYsQ0FBQztJQUtDLENBQUM7SUFFSixxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQWhCUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVlzQixlQUFNO1lBQ0ksb0NBQWdCO09BWHJDLGFBQWEsQ0FpQnhCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRixJQWlCRTtBQWpCVyxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnNcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImhvbWUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgbXlJdGVtcyA9IFtcbiAgICAgICAgeyBuYW1lIDogJ0FuZ3VsYXInICwgaW1nOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2NmL0FuZ3VsYXJfZnVsbF9jb2xvcl9sb2dvLnN2Zy8yNTBweC1Bbmd1bGFyX2Z1bGxfY29sb3JfbG9nby5zdmcucG5nJ30sXG4gICAgICAgIHsgbmFtZTogJ05hdGl2ZVNjcmlwdCcsIGltZzogJ2h0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzI3Mi8xKllWeVZhXzVDQUNfQ2tocm1nTlMyRWcucG5nJ30sXG4gICAgICAgIHsgbmFtZTogJ05HLUNMQVNTUk9PTScsIGltZzogJ2h0dHBzOi8vYmxvZy5uZy1jbGFzc3Jvb20uY29tL2ltYWdlcy9pb24tYm9vay13aC5wbmcnfSxcbiAgICAgICAgeyBuYW1lOiAnVHlwZVNjcmlwdCcsIGltZzogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy83NDMxNTUzODE2NjExNDMwNDAvYnluTlk1ZEpfNDAweDQwMC5qcGcnfSxcbiAgICAgICAgeyBuYW1lOiAnUnhKUycsIGltZzogJ2h0dHBzOi8vY2RuLmF1dGgwLmNvbS9ibG9nL3JlYWN0aXZlLXByb2dyYW1taW5nL2xvZ28ucG5nJ31cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge31cblxuICAgIGdvYmFja0hpc3RvcnkgKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuIH1cbiJdfQ==