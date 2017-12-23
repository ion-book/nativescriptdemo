"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_1 = require("application");
var applicationSettings = require("application-settings");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var AppComponent = (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        applicationSettings.setBoolean('remember', true);
        if (applicationSettings.hasKey('remember')) {
            this.login();
        }
        if (application_1.android) {
            application_1.android.on(application_1.AndroidApplication.activityCreatedEvent, function (args) {
                console.log("1 - Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
            application_1.android.on(application_1.AndroidApplication.activityDestroyedEvent, function (args) {
                console.log("2 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityStartedEvent, function (args) {
                console.log("3 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityPausedEvent, function (args) {
                console.log("4 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityResumedEvent, function (args) {
                console.log("5 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityStoppedEvent, function (args) {
                console.log("6 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.saveActivityStateEvent, function (args) {
                console.log("7 - Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
            application_1.android.on(application_1.AndroidApplication.activityResultEvent, function (args) {
                console.log("8 - Event: " + args.eventName + ", Activity: " + args.activity +
                    ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
            });
            application_1.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (args) {
                console.log("9 - Event: " + args.eventName + ", Activity: " + args.activity);
                // args.cancel = true;
            });
        }
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMkNBRTZEO0FBSTdELDBEQUE0RDtBQUM1RCxtRkFBaUY7QUFRakY7SUFJSSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEQsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMscUJBQU8sQ0FBQyxDQUFDLENBQUM7WUFDVixxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLElBQW9DO2dCQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUcsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDLElBQThCO2dCQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLElBQThCO2dCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLElBQThCO2dCQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLElBQThCO2dCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLElBQThCO2dCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDLElBQW9DO2dCQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUcsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLElBQW9DO2dCQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTtvQkFDdkUsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEgsQ0FBQyxDQUFDLENBQUM7WUFFSCxxQkFBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQXlDO2dCQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdFLHNCQUFzQjtZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBdkRRLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FNd0Msb0NBQWdCO09BSjdDLFlBQVksQ0F3RHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgYW5kcm9pZCwgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCdW5kbGVFdmVudERhdGEsXG4gICAgQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhLCBBbmRyb2lkQWN0aXZpdHlSZXN1bHRFdmVudERhdGEsXG4gICAgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImFwcC5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKCdyZW1lbWJlcicsIHRydWUpO1xuICAgICAgICBpZiAoYXBwbGljYXRpb25TZXR0aW5ncy5oYXNLZXkoJ3JlbWVtYmVyJykpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5kcm9pZCkge1xuICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlDcmVhdGVkRXZlbnQsIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlCdW5kbGVFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgLSBFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5ICsgXCIsIEJ1bmRsZTogXCIgKyBhcmdzLmJ1bmRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eURlc3Ryb3llZEV2ZW50LCAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyIC0gRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eVN0YXJ0ZWRFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMyAtIEV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlQYXVzZWRFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNCAtIEV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bWVkRXZlbnQsIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjUgLSBFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5U3RvcHBlZEV2ZW50LCAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI2IC0gRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5zYXZlQWN0aXZpdHlTdGF0ZUV2ZW50LCAoYXJnczogQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI3IC0gRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSArIFwiLCBCdW5kbGU6IFwiICsgYXJncy5idW5kbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bHRFdmVudCwgKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eVJlc3VsdEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiOCAtIEV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkgK1xuICAgICAgICAgICAgICAgICAgICBcIiwgcmVxdWVzdENvZGU6IFwiICsgYXJncy5yZXF1ZXN0Q29kZSArIFwiLCByZXN1bHRDb2RlOiBcIiArIGFyZ3MucmVzdWx0Q29kZSArIFwiLCBJbnRlbnQ6IFwiICsgYXJncy5pbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoYXJnczogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjkgLSBFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgICAgICAvLyBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VudHJlIGFsIHJlbWVtYmVyIGxvZ2luJyk7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvblNldHRpbmdzLmdldEJvb2xlYW4oJ3JlbWVtYmVyJykpe1xuICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZSddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==