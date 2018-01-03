import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { DogService } from './common/dog.service';

import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent  } from './home/home.component';
import { PostComponent } from './post/post.component';




import firebase = require('nativescript-plugin-firebase');

firebase.init({
    persist: false
}).then(
    (instance) => {
        console.log('firebase init ok');
    },
    (error) => {
        console.log('oh oh ocurrio un error con firebase');
    }
)

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PostComponent
    ],
    providers: [
        DogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
