import { Injectable } from "@angular/core";

import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from '../environment/environment';

import http = require("http");

@Injectable()
export class DogService {
 
    constructor(private _http: Http) {}

    getNewList() {
        return http.getJSON(environment.url + "breed/komondor/images");
    }

    getList() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(environment.url + "breed/komondor/images")
                    .toPromise();
    }


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return JSON.stringify(error.json());
    }

}