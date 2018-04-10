import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { AuthGuard } from '../auth/auth-guard.service';


import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackService } from '../services/feedback.services';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from '../shared/restConfig';
import { LeaderService } from '../services/leader.service';




@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RestangularModule.forRoot(RestangularConfigFactory),
        FormsModule, ReactiveFormsModule
    
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ], providers: [
       AuthGuard,FeedbackService, LeaderService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
        {provide: 'BaseURL',   useValue: baseURL},ProcessHTTPMsgService,
        {provide: APP_BASE_HREF, useValue : '/' }]
})
export class CoreModule{}