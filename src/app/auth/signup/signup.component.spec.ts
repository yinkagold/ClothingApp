import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SignupComponent } from './signup.component'

import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
describe('SignupComponent', ()=>{
    let component:SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let store: Store<fromApp.AppState>;

    beforeEach(()=> {
      component = new SignupComponent(store);
    });

    it('should create onSignUp', ()=>{
        expect(component.onSignup).toBeTruthy();
    })

})