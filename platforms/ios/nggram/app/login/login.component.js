"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
        this.email = '';
        this.password = '';
        this.myItems = [
            { name: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
            { name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png' },
            { name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png' },
            { name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg' },
            { name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png' }
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.backgroundColor = 'lightgray';
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/list']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            templateUrl: "./login.component.html",
            moduleId: module.id,
            styleUrls: ["login.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFRekM7SUFLSSx3QkFBcUIsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIdkQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBWXJCLFlBQU8sR0FBRztZQUNOLEVBQUUsSUFBSSxFQUFHLFNBQVMsRUFBRyxHQUFHLEVBQUUsNkhBQTZILEVBQUM7WUFDeEosRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxzRUFBc0UsRUFBQztZQUNwRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLHNEQUFzRCxFQUFDO1lBQ3BGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsOEVBQThFLEVBQUM7WUFDMUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSwwREFBMEQsRUFBQztTQUNuRixDQUFBO0lBaEIwRCxDQUFDO0lBRTVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBTzZCLFdBQUksRUFBa0IsZUFBTTtPQUw5QyxjQUFjLENBc0J6QjtJQUFELHFCQUFDO0NBQUEsQUF0QkYsSUFzQkU7QUF0Qlcsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVtYWlsOiBzdHJpbmcgPSAnJztcbiAgICBwYXNzd29yZDogc3RyaW5nID0nJztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmF5JztcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGlzdCddKTtcbiAgICB9XG5cbiAgICBteUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWUgOiAnQW5ndWxhcicgLCBpbWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2MvY2YvQW5ndWxhcl9mdWxsX2NvbG9yX2xvZ28uc3ZnLzI1MHB4LUFuZ3VsYXJfZnVsbF9jb2xvcl9sb2dvLnN2Zy5wbmcnfSxcbiAgICAgICAgeyBuYW1lOiAnTmF0aXZlU2NyaXB0JywgaW1nOiAnaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMjcyLzEqWVZ5VmFfNUNBQ19Da2hybWdOUzJFZy5wbmcnfSxcbiAgICAgICAgeyBuYW1lOiAnTkctQ0xBU1NST09NJywgaW1nOiAnaHR0cHM6Ly9ibG9nLm5nLWNsYXNzcm9vbS5jb20vaW1hZ2VzL2lvbi1ib29rLXdoLnBuZyd9LFxuICAgICAgICB7IG5hbWU6ICdUeXBlU2NyaXB0JywgaW1nOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzc0MzE1NTM4MTY2MTE0MzA0MC9ieW5OWTVkSl80MDB4NDAwLmpwZyd9LFxuICAgICAgICB7IG5hbWU6ICdSeEpTJywgaW1nOiAnaHR0cHM6Ly9jZG4uYXV0aDAuY29tL2Jsb2cvcmVhY3RpdmUtcHJvZ3JhbW1pbmcvbG9nby5wbmcnfVxuICAgIF1cbiB9XG4iXX0=