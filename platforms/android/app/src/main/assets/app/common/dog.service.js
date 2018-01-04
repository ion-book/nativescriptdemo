"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var environment_1 = require("../environments/environment");
var http = require("http");
var DogService = (function () {
    function DogService(_http) {
        this._http = _http;
    }
    DogService.prototype.getList = function () {
        var headers = new http_1.Headers();
        headers.append('Cotent-Type', 'aplication/json');
        return this._http
            .get(environment_1.environment.url_backend + "breed/komondor/images");
    };
    DogService.prototype.getNewList = function () {
        return http.getJSON(environment_1.environment.url_backend + "breed/komondor/images");
    };
    DogService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return JSON.stringify(error.json());
    };
    DogService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DogService);
    return DogService;
}());
exports.DogService = DogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBdUQ7QUFFdkQsMkRBQTBEO0FBRTFELDJCQUE4QjtBQUc5QjtJQUVJLG9CQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFHLENBQUM7SUFFcEMsNEJBQU8sR0FBUDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDUixHQUFHLENBQUkseUJBQVcsQ0FBQyxXQUFXLDBCQUF1QixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDWix5QkFBVyxDQUFDLFdBQVcsMEJBQXVCLENBQ3BELENBQUM7SUFDTixDQUFDO0lBR0QsaUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7eUNBR21CLFdBQUk7T0FGdkIsVUFBVSxDQXVCdEI7SUFBRCxpQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvZ1NlcnZpY2Uge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0TGlzdCgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ290ZW50LVR5cGUnLCAnYXBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAgICAgLmdldChgJHtlbnZpcm9ubWVudC51cmxfYmFja2VuZH1icmVlZC9rb21vbmRvci9pbWFnZXNgKTtcbiAgICB9XG5cbiAgICBnZXROZXdMaXN0KCkge1xuICAgICAgICByZXR1cm4gaHR0cC5nZXRKU09OKFxuICAgICAgICAgICAgYCR7ZW52aXJvbm1lbnQudXJsX2JhY2tlbmR9YnJlZWQva29tb25kb3IvaW1hZ2VzYFxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSk7XG4gICAgfVxuXG59Il19