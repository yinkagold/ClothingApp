import { TestBed, async, fakeAsync, tick , inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router,RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import {RouterTestingModule} from "@angular/router/testing";

import { appRoutes } from'./app-routing.module';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   describe('Router: App', () => {

//     let location: Location;
//     let router: Router;
//     let fixture;
  
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         providers: [RouterModule.forRoot(appRoutes)], 
//         declarations: [
//           HomeComponent,ContactComponent, AboutComponent, ShoppingListComponent,
//           AppComponent
//         ]
//       });
  
//       router = TestBed.get(Router); 
//       location = TestBed.get(Location); 
  
//       fixture = TestBed.createComponent(AppComponent); 
//       router.initialNavigation(); 
//     });
    