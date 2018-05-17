import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ShoppingsListComponent } from './shoppings-list.component';
import { ShoppingService } from '../../services/shopping.service';

import { Design } from '../../shared/design.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from 'selenium-webdriver';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { firestore } from 'firebase';


describe('shoppingService', () => {
  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [ShoppingService, {provide: AngularFireDatabase, useValue:firestore}]
    });
  });
     it('should be created', inject([ShoppingService], (service: ShoppingService)=>{
    expect(service).toBeTruthy();
    }));

    it('should have get Data function',
    inject([ShoppingService], (service: ShoppingService) => {
     expect(service.getData).toBeTruthy();
    }));

    it('should have the insert design function', 
    inject([ShoppingService], (service: ShoppingService) => {
    expect(service.insertDesign).toBeTruthy();
    }));

    it('should have the update design function',
    inject([ShoppingService], (service:ShoppingService) =>{
    expect(service.updateDesign).toBeTruthy();
    }));
    it('should have the delete design function',
    inject([ShoppingService], (service: ShoppingService) =>{
    expect(service.deleteDesign).toBeTruthy();
    }));
});
