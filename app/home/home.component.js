"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.myItems = [
            { id: 1, name: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
            { id: 2, name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png' },
            { id: 3, name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png' },
            { id: 4, name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg' },
            { id: 5, name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png' }
        ];
        console.log('home constructor');
    }
    HomeComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "./home.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxtRkFBaUY7QUFTakY7SUFVSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFSdEQsWUFBTyxHQUFHO1lBQ04sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRyxTQUFTLEVBQUcsR0FBRyxFQUFFLDZIQUE2SCxFQUFDO1lBQy9KLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxzRUFBc0UsRUFBQztZQUMzRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsc0RBQXNELEVBQUM7WUFDM0YsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLDhFQUE4RSxFQUFDO1lBQ2pILEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSwwREFBMEQsRUFBQztTQUMxRixDQUFDO1FBR0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQWhCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVl3QyxvQ0FBZ0I7T0FWN0MsYUFBYSxDQWtCeEI7SUFBRCxvQkFBQztDQUFBLEFBbEJGLElBa0JFO0FBbEJXLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgXG4gICAgbXlJdGVtcyA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZSA6ICdBbmd1bGFyJyAsIGltZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jZi9Bbmd1bGFyX2Z1bGxfY29sb3JfbG9nby5zdmcvMjUwcHgtQW5ndWxhcl9mdWxsX2NvbG9yX2xvZ28uc3ZnLnBuZyd9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnTmF0aXZlU2NyaXB0JywgaW1nOiAnaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMjcyLzEqWVZ5VmFfNUNBQ19Da2hybWdOUzJFZy5wbmcnfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ05HLUNMQVNTUk9PTScsIGltZzogJ2h0dHBzOi8vYmxvZy5uZy1jbGFzc3Jvb20uY29tL2ltYWdlcy9pb24tYm9vay13aC5wbmcnfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogJ1R5cGVTY3JpcHQnLCBpbWc6ICdodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvNzQzMTU1MzgxNjYxMTQzMDQwL2J5bk5ZNWRKXzQwMHg0MDAuanBnJ30sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdSeEpTJywgaW1nOiAnaHR0cHM6Ly9jZG4uYXV0aDAuY29tL2Jsb2cvcmVhY3RpdmUtcHJvZ3JhbW1pbmcvbG9nby5wbmcnfVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gfVxuIl19