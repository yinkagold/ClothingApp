import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingsListComponent } from './shoppings-list/shoppings-list.component';
import { ShoppingService } from '../services/shopping.service';
import { AngularFireDatabase } from 'angularfire2/database';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        ShoppingsListComponent
     
    ],
    imports: [
        CommonModule,
        FormsModule,ReactiveFormsModule,
        CarouselModule.forRoot()
    ],
    providers:[ShoppingService, AngularFireDatabase]
})
export class ShoppingListModule{

}