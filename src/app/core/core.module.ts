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
import { FeedbackListComponent } from './contact/feedback-list/feedback-list.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        FeedbackListComponent,
        ContactsComponent,
     
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
        CarouselModule.forRoot()
    
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ], providers: [
       AuthGuard,FeedbackService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
        {provide: APP_BASE_HREF, useValue : '/' }]
})
export class CoreModule{}