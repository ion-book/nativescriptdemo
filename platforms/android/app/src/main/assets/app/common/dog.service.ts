import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

import http = require('http');

@Injectable()
export class DogService {
    
    constructor (private _http: Http) {}

    getList() {
        let headers = new Headers();
        headers.append('Cotent-Type', 'aplication/json');
        return this._http
                .get(`${environment.url_backend}breed/komondor/images`);
    }

    getNewList() {
        return http.getJSON(
            `${environment.url_backend}breed/komondor/images`
        );
    }


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return JSON.stringify(error.json());
    }

}