import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { DogService } from '../common/dog.service';
import * as SocialShare from "nativescript-social-share";

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
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

 }
