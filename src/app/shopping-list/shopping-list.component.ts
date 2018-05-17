import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { NgForm } from '@angular/forms'

import { Design } from '../shared/design.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

import { ShoppingService } from '../services/shopping.service';
 


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 
  shoppingListState:Observable<{designs: Design[]}>
 shoppingList : Design[]

  constructor(private store: Store<fromApp.AppState>,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
   
  }

   onEditItem(index: number) {
   this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }


  }