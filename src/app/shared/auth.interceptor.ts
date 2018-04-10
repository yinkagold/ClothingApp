// Here toekn is gotten and append to every request sent 

import { HttpInterceptor, HttpRequest , HttpHandler,  HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private store: Store<fromApp.AppState>){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Intercepted', req);
      // const copiedReq = req.clone({headers: req.headers.append('', '')}); // this makes a copy of the in coming request and allow save edit, set could be used instead of append
        return this.store.select('auth')
        .take(1) // only get the value once
        .switchMap((authState: fromAuth.State) => {
            const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
            return next.handle(copiedReq);
        } )
    }
}