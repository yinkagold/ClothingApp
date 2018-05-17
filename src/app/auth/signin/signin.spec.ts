import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SigninComponent } from './signin.component'

import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
describe('SigninComponent', ()=>{
    let component:SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;
    let store: Store<fromApp.AppState>;

    beforeEach(()=> {
      component = new SigninComponent(store);
    });

    it('should create onSignIn', ()=>{
        expect(component.onSignin).toBeTruthy();
    })

})