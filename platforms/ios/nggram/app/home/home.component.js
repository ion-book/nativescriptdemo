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
    HomeComponent.prototype.onSwipe = function (data) {
        this.myItems = [
            { id: 1, name: 'Roger Keith Barrett', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Syd_barrett.jpg/490px-Syd_barrett.jpg' },
            { id: 1, name: 'Bob Garcia Klose', img: 'https://paintboxtalks.files.wordpress.com/2013/06/bob-klose.jpg' },
            { id: 1, name: 'Roger Waters', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roger_Waters_18_May_2008_London_O2_Arena.jpg/500px-Roger_Waters_18_May_2008_London_O2_Arena.jpg' },
            { id: 1, name: 'Richard William Wright', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rickwright.jpg/500px-Rickwright.jpg' },
            { id: 1, name: 'Nick Mason', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nick_Mason_20060603_Fnac_08.jpg/500px-Nick_Mason_20060603_Fnac_08.jpg' }
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxtRkFBaUY7QUFVakY7SUFVSSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFSdEQsWUFBTyxHQUFHO1lBQ04sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRyxTQUFTLEVBQUcsR0FBRyxFQUFFLDZIQUE2SCxFQUFDO1lBQy9KLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxzRUFBc0UsRUFBQztZQUMzRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsc0RBQXNELEVBQUM7WUFDM0YsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLDhFQUE4RSxFQUFDO1lBQ2pILEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSwwREFBMEQsRUFBQztTQUMxRixDQUFDO1FBR0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFTO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxFQUFFLGlHQUFpRyxFQUFDO1lBQzVJLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLGlFQUFpRSxFQUFDO1lBQ3pHLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSwySkFBMkosRUFBQztZQUMvTCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLEdBQUcsRUFBRSwrRkFBK0YsRUFBQztZQUM3SSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsaUlBQWlJLEVBQUM7U0FDdEssQ0FBQztJQUNOLENBQUM7SUExQlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FZd0Msb0NBQWdCO09BVjdDLGFBQWEsQ0EyQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3VpL2dlc3R1cmVzJztcbmltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uLy4uL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9idWlsZC9pbnRlcm1lZGlhdGVzL2Fzc2V0cy9kZWJ1Zy9hcHAvdG5zX21vZHVsZXMvcnhqcy9zcmMvb3BlcmF0b3JzL3NhbXBsZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgXG4gICAgbXlJdGVtcyA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZSA6ICdBbmd1bGFyJyAsIGltZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jZi9Bbmd1bGFyX2Z1bGxfY29sb3JfbG9nby5zdmcvMjUwcHgtQW5ndWxhcl9mdWxsX2NvbG9yX2xvZ28uc3ZnLnBuZyd9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiAnTmF0aXZlU2NyaXB0JywgaW1nOiAnaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMjcyLzEqWVZ5VmFfNUNBQ19Da2hybWdOUzJFZy5wbmcnfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogJ05HLUNMQVNTUk9PTScsIGltZzogJ2h0dHBzOi8vYmxvZy5uZy1jbGFzc3Jvb20uY29tL2ltYWdlcy9pb24tYm9vay13aC5wbmcnfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogJ1R5cGVTY3JpcHQnLCBpbWc6ICdodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvNzQzMTU1MzgxNjYxMTQzMDQwL2J5bk5ZNWRKXzQwMHg0MDAuanBnJ30sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6ICdSeEpTJywgaW1nOiAnaHR0cHM6Ly9jZG4uYXV0aDAuY29tL2Jsb2cvcmVhY3RpdmUtcHJvZ3JhbW1pbmcvbG9nby5wbmcnfVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgb25Td2lwZShkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gW1xuICAgICAgICAgICAge2lkOiAxLCBuYW1lOiAnUm9nZXIgS2VpdGggQmFycmV0dCcsIGltZzogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TeWRfYmFycmV0dC5qcGcvNDkwcHgtU3lkX2JhcnJldHQuanBnJ30sXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICdCb2IgR2FyY2lhIEtsb3NlJywgaW1nOiAnaHR0cHM6Ly9wYWludGJveHRhbGtzLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxMy8wNi9ib2Ita2xvc2UuanBnJ30sXG4gICAgICAgICAgICB7aWQ6IDEsIG5hbWU6ICdSb2dlciBXYXRlcnMnLCBpbWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzMvM2IvUm9nZXJfV2F0ZXJzXzE4X01heV8yMDA4X0xvbmRvbl9PMl9BcmVuYS5qcGcvNTAwcHgtUm9nZXJfV2F0ZXJzXzE4X01heV8yMDA4X0xvbmRvbl9PMl9BcmVuYS5qcGcnfSxcbiAgICAgICAgICAgIHtpZDogMSwgbmFtZTogJ1JpY2hhcmQgV2lsbGlhbSBXcmlnaHQnLCBpbWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2EvYTQvUmlja3dyaWdodC5qcGcvNTAwcHgtUmlja3dyaWdodC5qcGcnfSxcbiAgICAgICAgICAgIHtpZDogMSwgbmFtZTogJ05pY2sgTWFzb24nLCBpbWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2YvZjAvTmlja19NYXNvbl8yMDA2MDYwM19GbmFjXzA4LmpwZy81MDBweC1OaWNrX01hc29uXzIwMDYwNjAzX0ZuYWNfMDguanBnJ31cbiAgICAgICAgXTtcbiAgICB9XG59XG4iXX0=