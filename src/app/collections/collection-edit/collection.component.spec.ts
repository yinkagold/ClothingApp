import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CollectionEditComponent }  from './collection-edit.component';
import { Design } from '../../shared/design.model';
import { Store } from '@ngrx/store';
import * as fromCollection from '../store/collection.reducers';
import * as CollectionActions from '../store/collection.actions';
import { ActivatedRoute, Router, Params } from '@angular/router';

// describe('CollectionEditComponent', () => {
//     let component: CollectionEditComponent;
//     let fixture: ComponentFixture<CollectionEditComponent>;
  
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [ CollectionEditComponent ]
//       })
//       .compileComponents();
//     }));
  
//     beforeEach(() => {
//       fixture = TestBed.createComponent(CollectionEditComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
  
    describe('CollectionEditComponent', () => {
      let component: CollectionEditComponent;
      let fixture: ComponentFixture<CollectionEditComponent>;
      let store: Store<fromCollection.FeatureState>;
  
      beforeEach(()=> {
        component = new CollectionEditComponent(ActivatedRoute, Router, Store );
      });
  
      it('should create the ngOnInit', () =>{
        expect(component.ngOnInit).toBeTruthy();
      });
      it('should create onAddDesign',() => {
        expect(component.onAddDesign).toBeTruthy();
      });
      it('should create onDeleteDesign',() => {
        expect(component.onDeleteDesign).toBeTruthy();
      });
      it('should create onSubmit',() => {
        expect(component.onSubmit).toBeTruthy();
      });
      it('should create onCancel',() => {
        expect(component.onCancel).toBeTruthy();
      });
      
     });
  
