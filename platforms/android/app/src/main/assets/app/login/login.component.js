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
        this.loginGoogle();
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
    LoginComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBQ3hELGdDQUErQjtBQU0zQix1REFBMEQ7QUFHOUQsbUZBQWlGO0FBR2pGLDBEQUE0RDtBQVE1RDtJQTJCSSx3QkFDWSxJQUFVLEVBQ1YsZ0JBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0I5QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUFZLElBQUksQ0FBQztRQTJCckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUExQkQsb0NBQVcsR0FBWDtRQUFBLGlCQW1CQztRQWxCRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTTtTQUNsQyxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsTUFBTTtZQUNILEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQzFCLENBQUMsT0FBTyxDQUFDLEVBQ1Q7Z0JBQ0ksVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxRQUFRO2lCQUNsQjthQUNKLENBQ0osQ0FBQztRQUNOLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFTRCxpQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLDhCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDekMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQ2QsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FDMUIsQ0FBQyxPQUFPLENBQUMsRUFDVDtnQkFDSSxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUVMLENBQUM7SUEzRFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0E4Qm9CLFdBQUk7WUFDUSxvQ0FBZ0I7T0E3QnJDLGNBQWMsQ0E0RHpCO0lBQUQscUJBQUM7Q0FBQSxBQTVERixJQTRERTtBQTVEVyx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCB7IGFuZHJvaWQsIEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSwgQW5kcm9pZEFjdGl2aXR5UmVzdWx0RXZlbnREYXRhLFxuICAgIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbiAgICBpbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBlbWFpbDogc3RyaW5nID0gJyc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyA9Jyc7XG4gICAgcmVtZW1iZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgbG9naW5Hb29nbGUoKSB7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5HT09HTEVcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIChyZXN1bHQpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICAgICAgWycvaG9tZSddLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7IFxuICAgICAgICB0aGlzLmxvZ2luR29vZ2xlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7fVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmVtYWlsICE9PSAnJywgdGhpcy5wYXNzd29yZCAhPT0gJycpe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKCdyZW1lbWJlcicsIHRoaXMucmVtZW1iZXIpO1xuICAgICAgICAgICAgaWYodGhpcy5yZW1lbWJlcil7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ2VtYWlsJywgdGhpcy5lbWFpbCk7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ3Bhc3N3b3JkJywgdGhpcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZSgnZW1haWwnKTtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZSgncGFzc3dvcmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShcbiAgICAgICAgICAgICAgICBbJy9ob21lJ10sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gfVxuIl19