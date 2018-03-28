import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { CollectionService } from '../collections/collection.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth-guard.service';
import { AuthGuard } from '../auth/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ], providers: [
        ShoppingListService,
        CollectionService, 
        DataStorageService,
        AuthService, AuthGuard,
        {provide: APP_BASE_HREF, useValue : '/' }]
})
export class CoreModule{}