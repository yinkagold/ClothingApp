import { NgModule } from '@angular/core'
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        FormsModule, 
        AuthRoutingModule
    ]
})
export class AuthModule{}

// import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
// import { RouterModule } from '@angular/router/src/router_module';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

// @NgModule({
//     declarations: [
     
//     ],
//     imports: [
// 		CommonModule,
//         FormioAuth,
//         RouterModule.forChild(FormioAuthRoutes())
//     ]
// })
// export class AuthModule{}