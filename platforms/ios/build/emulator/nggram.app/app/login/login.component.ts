import { Component, OnInit } from "@angular/core";
import { Page } from 'ui/page';
import { Router } from "@angular/router";
@Component({
    selector: "ns-login",
    templateUrl: "./login.component.html",
    moduleId: module.id,
    styleUrls: ["login.component.css"]
})

export class LoginComponent implements OnInit {

    email: string = '';
    password: string ='';

    constructor( private page: Page, private router: Router ) {}

    ngOnInit() {
        this.page.backgroundColor = 'lightgray';
    }

    login() {
        this.router.navigate(['/list']);
    }

    myItems = [
        { name : 'Angular' , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'},
        { name: 'NativeScript', img: 'https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png'},
        { name: 'NG-CLASSROOM', img: 'https://blog.ng-classroom.com/images/ion-book-wh.png'},
        { name: 'TypeScript', img: 'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg'},
        { name: 'RxJS', img: 'https://cdn.auth0.com/blog/reactive-programming/logo.png'}
    ]
 }
