import { Component } from "@angular/core";

import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
    selector: "ns-post",
    templateUrl: "./post.component.html",
    moduleId: module.id
})

export class PostComponent {
    myItems = [
        { id: 1, name : 'Angular' , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'},
        { id: 2, name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png'},
        { id: 3, name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png'},
        { id: 4, name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg'},
        { id: 5, name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png'}
    ];

    item: any;
    id: number;

    constructor(
        private routerExtensions: RouterExtensions,
        private pageRoute: PageRoute
    ) {
        this.pageRoute.activatedRoute
                .switchMap(activatedRouter => activatedRouter.params)
                    .forEach((params) => {
                        this.id = +params['id'];
                        this.item = this.myItems.find(x => x.id === this.id);
                    });
    }

    next() {
        let xid: number;
        if (this.id < 5) { xid = this.id + 1; }
        else { xid = 1; }
        this.routerExtensions.navigate(['/post', xid]);
    }
 }
