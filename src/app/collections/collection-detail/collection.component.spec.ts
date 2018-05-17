import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CollectionDetailComponent }  from './collection-detail.component';

import { Design } from '../../shared/design.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromCollection from '../store/collection.reducers';
import * as CollectionActions from '../store/collection.actions';
import { collectionReducer } from '../store/collection.reducers';
import { ShoppingService } from '../../services/shopping.service';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

// describe('CollectionDetailComponent', () => {
//     let component: CollectionDetailComponent;
//     let fixture: ComponentFixture<CollectionDetailComponent>;
//     let store: Store<fromCollection.FeatureState>;

//     beforeEach(()=> {
//       component = new CollectionDetailComponent(ActivatedRoute, Router, Store,ShoppingService );
//     });

//     it('should create the onAddRoShoppingList', () =>{
//       expect(component.onAddToShoppingList).toBeTruthy();
//     });
//     it('should create onDeleteCollection',() => {
//       expect(component.onDeleteCollection).toBeTruthy();
//     });
//     it('should create onEditCollection',() => {
//       expect(component.onEditCollection).toBeTruthy();
//     });
//    });
