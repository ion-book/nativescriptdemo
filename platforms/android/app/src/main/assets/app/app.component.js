"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var applicationSettings = require("application-settings");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var AppComponent = (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        applicationSettings.setBoolean('remember', true);
        if (applicationSettings.hasKey('remember')) {
            // this.login();
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkFirebase();
    };
    AppComponent.prototype.checkFirebase = function () {
    };
    AppComponent.prototype.login = function () {
        console.log('entre al remember login');
        if (applicationSettings.getBoolean('remember')) {
            this.routerExtensions.navigate(['/home']);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.component.css"]
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQsMERBQTREO0FBQzVELG1GQUFpRjtBQVFqRjtJQUlJLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsZ0JBQWdCO1FBRW5CLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQWEsR0FBYjtJQUVBLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUF6QlEsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQU13QyxvQ0FBZ0I7T0FKN0MsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBhbmRyb2lkLCBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEsIEFuZHJvaWRBY3Rpdml0eVJlc3VsdEV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbigncmVtZW1iZXInLCB0cnVlKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uU2V0dGluZ3MuaGFzS2V5KCdyZW1lbWJlcicpKSB7XG4gICAgICAgICAgIC8vIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tGaXJlYmFzZSgpO1xuICAgIH1cblxuICAgIGNoZWNrRmlyZWJhc2UoKSB7XG5cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VudHJlIGFsIHJlbWVtYmVyIGxvZ2luJyk7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvblNldHRpbmdzLmdldEJvb2xlYW4oJ3JlbWVtYmVyJykpe1xuICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==