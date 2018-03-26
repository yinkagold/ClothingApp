import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollectionsComponent } from './collections/collections.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CollectionDetailComponent } from './collections/collection-detail/collection-detail.component';
import { CollectionEditComponent } from './collections/collection-edit/collection-edit.component';
import { CollectionListComponent } from './collections/collection-list/collection-list.component';
import { CollectionStartComponent } from './collections/collection-start/collection-start.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { CollectionService } from './collections/collection.service';
import { CollectionItemComponent } from './collections/collection-list/collection-item/collection-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionsComponent,
    ShoppingListComponent,
    CollectionDetailComponent,
    CollectionEditComponent,
    CollectionListComponent,
    CollectionStartComponent,
    ShoppingEditComponent,
    DropdownDirective,
    CollectionItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, CollectionService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
