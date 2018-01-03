import { Component, OnInit } from "@angular/core";

import { android, AndroidApplication, AndroidActivityBundleEventData,
    AndroidActivityEventData, AndroidActivityResultEventData,
    AndroidActivityBackPressedEventData } from "application";


import { EventData } from 'data/observable';
import * as applicationSettings from "application-settings";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';



import firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})

export class AppComponent implements OnInit{

   

    constructor(private routerExtensions: RouterExtensions) {
        applicationSettings.setBoolean('remember', true);
        if (applicationSettings.hasKey('remember')) {
           // this.login();
           
        }
    } 

    ngOnInit() {
        this.checkFirebase();
    }

    checkFirebase() {
        console.log('here');
        firebase.login({
            type: firebase.LoginType.GOOGLE
          }).then(
              function (result) {
                JSON.stringify(result);
              },
              function (errorMessage) {
                console.log(errorMessage);
              }
          );
          
    }

    login() {
        console.log('entre al remember login');
        if (applicationSettings.getBoolean('remember')){
           this.routerExtensions.navigate(['/home']);
        }
    }
}
