"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var firebase = require("nativescript-plugin-firebase");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var applicationSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(page, routerExtensions) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.email = '';
        this.password = '';
        this.remember = true;
    }
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(function (result) {
            _this.routerExtensions.navigate(['/home'], {
                transition: {
                    name: 'flip',
                    duration: 2000,
                    curve: 'linear'
                }
            });
        }, function (error) {
            console.log('error', error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginGoogle();
    };
    LoginComponent.prototype.login = function () {
        if (this.email !== '', this.password !== '') {
            alert(this.remember);
            applicationSettings.setBoolean('remember', this.remember);
            if (this.remember) {
                applicationSettings.setString('email', this.email);
                applicationSettings.setString('password', this.password);
            }
            else {
                applicationSettings.remove('email');
                applicationSettings.remove('password');
            }
            this.routerExtensions.navigate(['/home'], {
                transition: {
                    name: 'flip',
                    duration: 2000,
                    curve: 'linear'
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            templateUrl: "./login.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_extensions_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELGdDQUErQjtBQU0zQix1REFBMEQ7QUFHOUQsbUZBQWlGO0FBR2pGLDBEQUE0RDtBQVE1RDtJQTJCSSx3QkFDWSxJQUFVLEVBQ1YsZ0JBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0I5QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLElBQUksQ0FBQztJQTBCckIsQ0FBQztJQXhCTCxvQ0FBVyxHQUFYO1FBQUEsaUJBbUJDO1FBbEJHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO1lBQ0gsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDMUIsQ0FBQyxPQUFPLENBQUMsRUFDVDtnQkFDSSxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQU9ELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDekMsS0FBSyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDZCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkQsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUMxQixDQUFDLE9BQU8sQ0FBQyxFQUNUO2dCQUNJLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtvQkFDZCxLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUNKLENBQUM7UUFDTixDQUFDO0lBRUwsQ0FBQztJQTVEUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQThCb0IsV0FBSTtZQUNRLG9DQUFnQjtPQTdCckMsY0FBYyxDQTZEekI7SUFBRCxxQkFBQztDQUFBLEFBN0RGLElBNkRFO0FBN0RXLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuaW1wb3J0IHsgYW5kcm9pZCwgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCdW5kbGVFdmVudERhdGEsXG4gICAgQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhLCBBbmRyb2lkQWN0aXZpdHlSZXN1bHRFdmVudERhdGEsXG4gICAgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuICAgIGltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVtYWlsOiBzdHJpbmcgPSAnJztcbiAgICBwYXNzd29yZDogc3RyaW5nID0nJztcbiAgICByZW1lbWJlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBsb2dpbkdvb2dsZSgpIHtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgKHJlc3VsdCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICBbJy9ob21lJ10sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9naW5Hb29nbGUoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZW1haWwgIT09ICcnLCB0aGlzLnBhc3N3b3JkICE9PSAnJyl7XG4gICAgICAgICAgICBhbGVydCAodGhpcy5yZW1lbWJlcik7XG4gICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oJ3JlbWVtYmVyJywgdGhpcy5yZW1lbWJlcik7XG4gICAgICAgICAgICBpZih0aGlzLnJlbWVtYmVyKXtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnZW1haWwnLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCdwYXNzd29yZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgIFsnL2hvbWUnXSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiB9XG4iXX0=