"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var PostComponent = (function () {
    function PostComponent(routerExtensions, pageRoute) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.pageRoute = pageRoute;
        this.myItems = [
            { id: 1, name: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
            { id: 2, name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png' },
            { id: 3, name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png' },
            { id: 4, name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg' },
            { id: 5, name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png' }
        ];
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRouter) { return activatedRouter.params; })
            .forEach(function (params) {
            _this.id = +params['id'];
            _this.item = _this.myItems.find(function (x) { return x.id === _this.id; });
        });
    }
    PostComponent.prototype.next = function () {
        var xid;
        if (this.id < 5) {
            xid = this.id + 1;
        }
        else {
            xid = 1;
        }
        this.routerExtensions.navigate(['/post', xid]);
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: "ns-post",
            templateUrl: "./post.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            router_1.PageRoute])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxtRkFBaUY7QUFDakYsc0RBQXdEO0FBQ3hELHVDQUFxQztBQVFyQztJQVlJLHVCQUNZLGdCQUFrQyxFQUNsQyxTQUFvQjtRQUZoQyxpQkFVQztRQVRXLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWJoQyxZQUFPLEdBQUc7WUFDTixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFHLFNBQVMsRUFBRyxHQUFHLEVBQUUsNkhBQTZILEVBQUM7WUFDL0osRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLHNFQUFzRSxFQUFDO1lBQzNHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxzREFBc0QsRUFBQztZQUMzRixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsOEVBQThFLEVBQUM7WUFDakgsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLDBEQUEwRCxFQUFDO1NBQzFGLENBQUM7UUFTRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDcEIsU0FBUyxDQUFDLFVBQUEsZUFBZSxJQUFJLE9BQUEsZUFBZSxDQUFDLE1BQU0sRUFBdEIsQ0FBc0IsQ0FBQzthQUNoRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLEdBQVcsQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDO1lBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUE3QlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FlZ0Msb0NBQWdCO1lBQ3ZCLGtCQUFTO09BZHZCLGFBQWEsQ0E4QnhCO0lBQUQsb0JBQUM7Q0FBQSxBQTlCRixJQThCRTtBQTlCVyxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcG9zdFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IHtcbiAgICBteUl0ZW1zID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lIDogJ0FuZ3VsYXInICwgaW1nOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9jL2NmL0FuZ3VsYXJfZnVsbF9jb2xvcl9sb2dvLnN2Zy8yNTBweC1Bbmd1bGFyX2Z1bGxfY29sb3JfbG9nby5zdmcucG5nJ30sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdOYXRpdmVTY3JpcHQnLCBpbWc6ICdodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yNzIvMSpZVnlWYV81Q0FDX0NraHJtZ05TMkVnLnBuZyd9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiAnTkctQ0xBU1NST09NJywgaW1nOiAnaHR0cHM6Ly9ibG9nLm5nLWNsYXNzcm9vbS5jb20vaW1hZ2VzL2lvbi1ib29rLXdoLnBuZyd9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiAnVHlwZVNjcmlwdCcsIGltZzogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy83NDMxNTUzODE2NjExNDMwNDAvYnluTlk1ZEpfNDAweDQwMC5qcGcnfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogJ1J4SlMnLCBpbWc6ICdodHRwczovL2Nkbi5hdXRoMC5jb20vYmxvZy9yZWFjdGl2ZS1wcm9ncmFtbWluZy9sb2dvLnBuZyd9XG4gICAgXTtcblxuICAgIGl0ZW06IGFueTtcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGVyID0+IGFjdGl2YXRlZFJvdXRlci5wYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5teUl0ZW1zLmZpbmQoeCA9PiB4LmlkID09PSB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgbGV0IHhpZDogbnVtYmVyO1xuICAgICAgICBpZiAodGhpcy5pZCA8IDUpIHsgeGlkID0gdGhpcy5pZCArIDE7IH1cbiAgICAgICAgZWxzZSB7IHhpZCA9IDE7IH1cbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Bvc3QnLCB4aWRdKTtcbiAgICB9XG4gfVxuIl19