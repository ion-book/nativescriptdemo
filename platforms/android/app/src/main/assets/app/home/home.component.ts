import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { DogService } from '../common/dog.service';
import * as SocialShare from "nativescript-social-share";

import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})

export class HomeComponent {
    
    myItems = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private dogService: DogService
    ) {
        console.log('home constructor');
    }

    share(url: string) {
        SocialShare.shareText(url);
      }

    ngOnInit() {

        this.dogService.getNewList().then(
            (response:any) => {
                this.myItems = response.message;
            }
        );

        this.dogService.getList()
            .then(
                response => {
                    console.log('response', response);
                },
                (error) => console.log(error)
            );

            firebase.admob.showInterstitial({
                iosInterstitialId: "ca-app-pub-9517346003011652/6938836122",
                androidInterstitialId: "ca-app-pub-9517346003011652/6938836122",
                testing: true, // when not running in production set this to true, Google doesn't like it any other way
                iosTestDeviceIds: [ // Android automatically adds the connected device as test device with testing:true, iOS does not
                    "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
                    "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
                ]
              }).then(
                  function () {
                    console.log("AdMob interstitial showing");
                  },
                  function (errorMessage) {
                    alert('error admob inter');
                  }
              );
            
        firebase.admob.showBanner({
            size: firebase.admob.AD_SIZE.SMART_BANNER, // see firebase.admob.AD_SIZE for all options
            margins: { // optional nr of device independent pixels from the top or bottom (don't set both)
                bottom: 10,
                top: 0
            },
            androidBannerId: "ca-app-pub-9517346003011652/7749101329",
            iosBannerId: "ca-app-pub-9517346003011652/3985369721",
            testing: true, // when not running in production set this to true, Google doesn't like it any other way
            iosTestDeviceIds: [ //Android automatically adds the connected device as test device with testing:true, iOS does not
                "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
                "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
            ]
            }).then(
                function () {
                console.log("AdMob banner showing");
                },
                function (errorMessage) {
                alert('error in admob');
                }
            );
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

 }
