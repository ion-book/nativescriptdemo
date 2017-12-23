import { Component, OnInit } from "@angular/core";

import { android, AndroidApplication, AndroidActivityBundleEventData,
    AndroidActivityEventData, AndroidActivityResultEventData,
    AndroidActivityBackPressedEventData } from "application";


import { EventData } from 'data/observable';
import * as applicationSettings from "application-settings";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})

export class AppComponent {

   

    constructor(private routerExtensions: RouterExtensions) {
        applicationSettings.setBoolean('remember', true);
        if (applicationSettings.hasKey('remember')) {
            this.login();
        }
        if (android) {
            android.on(AndroidApplication.activityCreatedEvent, (args: AndroidActivityBundleEventData) => {
                console.log("1 - Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
        
            android.on(AndroidApplication.activityDestroyedEvent, (args: AndroidActivityEventData) => {
                console.log("2 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
        
            android.on(AndroidApplication.activityStartedEvent, (args: AndroidActivityEventData) => {
                console.log("3 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
        
            android.on(AndroidApplication.activityPausedEvent, (args: AndroidActivityEventData) => {
                console.log("4 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
        
            android.on(AndroidApplication.activityResumedEvent, (args: AndroidActivityEventData) => {
                console.log("5 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
        
            android.on(AndroidApplication.activityStoppedEvent, (args: AndroidActivityEventData) => {
                console.log("6 - Event: " + args.eventName + ", Activity: " + args.activity);
            });
        
            android.on(AndroidApplication.saveActivityStateEvent, (args: AndroidActivityBundleEventData) => {
                console.log("7 - Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
        
            android.on(AndroidApplication.activityResultEvent, (args: AndroidActivityResultEventData) => {
                console.log("8 - Event: " + args.eventName + ", Activity: " + args.activity +
                    ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
            });
        
            android.on(AndroidApplication.activityBackPressedEvent, (args: AndroidActivityBackPressedEventData) => {
                console.log("9 - Event: " + args.eventName + ", Activity: " + args.activity);
                // args.cancel = true;
            });
        }
    } 

    login() {
        console.log('entre al remember login');
        if (applicationSettings.getBoolean('remember')){
           this.routerExtensions.navigate(['/home']);
        }
    }
}
