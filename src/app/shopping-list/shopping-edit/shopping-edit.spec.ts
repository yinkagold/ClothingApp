import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { ShoppingEditComponent } from './shopping-edit.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import { ShoppingService } from '../../services/shopping.service';
import { ToastrService } from 'ngx-toastr';

describe('shoppingEditComponent', () => {
    let component: ShoppingEditComponent;
    let fixture: ComponentFixture<ShoppingEditComponent>;
    let store: Store<fromApp.AppState>
    let shoppingService: ShoppingService;
    let toastrService: ToastrService;

    beforeEach(()=> {
      component = new ShoppingEditComponent(store, shoppingService,toastrService );
    });

    it('should create ngOnInit',()=> {
      expect(component.ngOnInit).toBeTruthy();
    });

    it('should create onSubmit',()=> {
      expect(component.onSubmit).toBeTruthy();
    });

    it('should create restForm',()=> {
      expect(component.resetForm).toBeTruthy();
    });

    });