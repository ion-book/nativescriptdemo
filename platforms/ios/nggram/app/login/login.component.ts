import { Component, OnInit, Type } from '@angular/core';
import { Page } from 'ui/page';

import { android, AndroidApplication, AndroidActivityBundleEventData,
    AndroidActivityEventData, AndroidActivityResultEventData,
    AndroidActivityBackPressedEventData } from "application";



import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { EventData } from 'data/observable';
import * as applicationSettings from "application-settings";

@Component({
    selector: "ns-login",
    templateUrl: "./login.component.html",
    moduleId: module.id
})

export class LoginComponent implements OnInit {

    email: string = '';
    password: string ='';
    remember: boolean = true;
    

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions,
    ) { }

    ngOnInit() {
       
    }

    login() {
        if (this.email !== '', this.password !== ''){
            alert (this.remember);
            applicationSettings.setBoolean('remember', this.remember);
            if(this.remember){
                applicationSettings.setString('email', this.email);
                applicationSettings.setString('password', this.password);
            }
            else {
                applicationSettings.remove('email');
                applicationSettings.remove('password');
            }
            this.routerExtensions.navigate(
                ['/home'],
                {
                    transition: {
                        name: 'flip',
                        duration: 2000,
                        curve: 'linear'
                    }
                }
            );
        }
        
    }
 }
