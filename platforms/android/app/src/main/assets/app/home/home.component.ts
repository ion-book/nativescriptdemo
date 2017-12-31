import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { TouchGestureEventData } from 'ui/gestures';
import { sample } from '../../platforms/android/app/build/intermediates/assets/debug/app/tns_modules/rxjs/src/operators/sample';

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

    onSwipe(data: any) {
        this.myItems = [
            {id: 1, name: 'Roger Keith Barrett', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Syd_barrett.jpg/490px-Syd_barrett.jpg'},
            {id: 1, name: 'Bob Garcia Klose', img: 'https://paintboxtalks.files.wordpress.com/2013/06/bob-klose.jpg'},
            {id: 1, name: 'Roger Waters', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roger_Waters_18_May_2008_London_O2_Arena.jpg/500px-Roger_Waters_18_May_2008_London_O2_Arena.jpg'},
            {id: 1, name: 'Richard William Wright', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rickwright.jpg/500px-Rickwright.jpg'},
            {id: 1, name: 'Nick Mason', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nick_Mason_20060603_Fnac_08.jpg/500px-Nick_Mason_20060603_Fnac_08.jpg'}
        ];
    }
}
