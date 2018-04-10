import { Component,  OnInit  } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as CollectionActions from '../../collections/store/collection.actions'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>; // this is used to authenticate users annd give access to certain navbars

  constructor(
              private store: Store<fromApp.AppState>) {
}

  ngOnInit(){
    this.authState = this.store.select('auth')
}

  onSaveData() {

      this.store.dispatch(new  CollectionActions.StoreCollections());
 
    
}

onFetchData() {
  this.store.dispatch(new CollectionActions.FetchCollections());
}

onLogout() {
  this.store.dispatch(new AuthActions.Logout)
  }
}