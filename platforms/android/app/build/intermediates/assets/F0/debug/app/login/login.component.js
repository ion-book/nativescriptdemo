"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
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
    LoginComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELGdDQUErQjtBQVMvQixtRkFBaUY7QUFHakYsMERBQTREO0FBUTVEO0lBU0ksd0JBQ1ksSUFBVSxFQUNWLGdCQUFrQztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVQ5QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLElBQUksQ0FBQztJQVFyQixDQUFDO0lBRUwsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3pDLEtBQUssQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQ2QsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDMUIsQ0FBQyxPQUFPLENBQUMsRUFDVDtnQkFDSSxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUVMLENBQUM7SUExQ1EsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FZb0IsV0FBSTtZQUNRLG9DQUFnQjtPQVhyQyxjQUFjLENBMkN6QjtJQUFELHFCQUFDO0NBQUEsQUEzQ0YsSUEyQ0U7QUEzQ1csd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBhbmRyb2lkLCBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEsIEFuZHJvaWRBY3Rpdml0eVJlc3VsdEV2ZW50RGF0YSxcbiAgICBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5cblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVtYWlsOiBzdHJpbmcgPSAnJztcbiAgICBwYXNzd29yZDogc3RyaW5nID0nJztcbiAgICByZW1lbWJlcjogYm9vbGVhbiA9IHRydWU7XG5cblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZW1haWwgIT09ICcnLCB0aGlzLnBhc3N3b3JkICE9PSAnJyl7XG4gICAgICAgICAgICBhbGVydCAodGhpcy5yZW1lbWJlcik7XG4gICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oJ3JlbWVtYmVyJywgdGhpcy5yZW1lbWJlcik7XG4gICAgICAgICAgICBpZih0aGlzLnJlbWVtYmVyKXtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnZW1haWwnLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCdwYXNzd29yZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgIFsnL2hvbWUnXSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiB9XG4iXX0=