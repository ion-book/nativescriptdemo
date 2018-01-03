"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var environment_1 = require("../environment/environment");
var http = require("http");
var DogService = (function () {
    function DogService(_http) {
        this._http = _http;
    }
    DogService.prototype.getNewList = function () {
        return http.getJSON(environment_1.environment.url + "breed/komondor/images");
    };
    DogService.prototype.getList = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(environment_1.environment.url + "breed/komondor/images")
            .toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxzQ0FBd0Q7QUFFeEQsMERBQXlEO0FBRXpELDJCQUE4QjtBQUc5QjtJQUVJLG9CQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFHLENBQUM7SUFFbkMsK0JBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUFXLENBQUMsR0FBRyxHQUFHLHVCQUF1QixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHlCQUFXLENBQUMsR0FBRyxHQUFHLHVCQUF1QixDQUFDO2FBQ25ELFNBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHRCxpQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBbkJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FHa0IsV0FBSTtPQUZ0QixVQUFVLENBcUJ0QjtJQUFELGlCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuaW1wb3J0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvZ1NlcnZpY2Uge1xuIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXROZXdMaXN0KCkge1xuICAgICAgICByZXR1cm4gaHR0cC5nZXRKU09OKGVudmlyb25tZW50LnVybCArIFwiYnJlZWQva29tb25kb3IvaW1hZ2VzXCIpO1xuICAgIH1cblxuICAgIGdldExpc3QoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoZW52aXJvbm1lbnQudXJsICsgXCJicmVlZC9rb21vbmRvci9pbWFnZXNcIilcbiAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSk7XG4gICAgfVxuXG59Il19