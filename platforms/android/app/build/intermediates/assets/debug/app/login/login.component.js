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
        console.log('ng on init login');
        /*
                if (applicationSettings.hasKey('remember')) {
                    if (this.remember){
                        this.email = applicationSettings.getString('email');
                        this.password = applicationSettings.getString('password');
                        this.login();
                    }
                }
        */
        // this.page.actionBarHidden = true;
        // this.page.backgroundColor = 'lightgray';
        // this.page.backgroundImage = 'res://icon';
    };
    LoginComponent.prototype.login = function () {
        if (this.email !== '', this.password !== '') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQVMvQixtRkFBaUY7QUFHakYsMERBQTREO0FBUTVEO0lBTUksd0JBQ1ksSUFBVSxFQUNWLGdCQUFrQztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLElBQUksQ0FBQztJQUt0QixDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4Qzs7Ozs7Ozs7VUFRRTtRQUNNLG9DQUFvQztRQUNwQywyQ0FBMkM7UUFDM0MsNENBQTRDO0lBQ2hELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3pDLEtBQUssQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQ2QsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDMUIsQ0FBQyxPQUFPLENBQUMsRUFDVDtnQkFDSSxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUVMLENBQUM7SUFwRFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FTb0IsV0FBSTtZQUNRLG9DQUFnQjtPQVJyQyxjQUFjLENBcUR6QjtJQUFELHFCQUFDO0NBQUEsQUFyREYsSUFxREU7QUFyRFcsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCB7IGFuZHJvaWQsIEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSwgQW5kcm9pZEFjdGl2aXR5UmVzdWx0RXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cblxuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZW1haWw6IHN0cmluZyA9ICcnO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgPScnO1xuICAgIHJlbWVtYmVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ25nIG9uIGluaXQgbG9naW4nKTtcbi8qXG4gICAgICAgIGlmIChhcHBsaWNhdGlvblNldHRpbmdzLmhhc0tleSgncmVtZW1iZXInKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygnZW1haWwnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4qL1xuICAgICAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyYXknO1xuICAgICAgICAvLyB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gJ3JlczovL2ljb24nO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBpZiAodGhpcy5lbWFpbCAhPT0gJycsIHRoaXMucGFzc3dvcmQgIT09ICcnKXtcbiAgICAgICAgICAgIGFsZXJ0ICh0aGlzLnJlbWVtYmVyKTtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbigncmVtZW1iZXInLCB0aGlzLnJlbWVtYmVyKTtcbiAgICAgICAgICAgIGlmKHRoaXMucmVtZW1iZXIpe1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdwYXNzd29yZCcsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgWycvaG9tZSddLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogJ2xpbmVhcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuIH1cbiJdfQ==