import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';


@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})

export class HomeComponent {
    
    myItems = [
        { id: 1, name : 'Angular' , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'},
        { id: 2, name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png'},
        { id: 3, name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png'},
        { id: 4, name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg'},
        { id: 5, name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png'}
    ];

    constructor(private routerExtensions: RouterExtensions) {
        console.log('home constructor');
    }

    back() {
        this.routerExtensions.backToPreviousPage();
    }

 }
