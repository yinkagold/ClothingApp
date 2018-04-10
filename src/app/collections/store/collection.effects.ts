import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as CollectionActions from '../store/collection.actions';
import { Collection } from '../collection.model';
import * as fromCollection from '../store/collection.reducers';


@Injectable()
export class CollectionEffects {
  @Effect()
  collectionFetch = this.actions$
    .ofType(CollectionActions.FETCH_COLLECTIONS)
    .switchMap((action: CollectionActions.FetchCollections) => {
      return this.httpClient.get<Collection[]>('https://myclothingapp-http.firebaseio.com//collections.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (collections) => {
        console.log(collections);
        for (let collection of collections) {
          if (!collection['designs']) {
            collection['designs'] = [];
          }
        }
        return {
          type: CollectionActions.SET_COLLECTIONS,
          payload: collections
        };
      }
    );

  @Effect({dispatch: false})
  collectionStore = this.actions$
    .ofType(CollectionActions.STORE_COLLECTIONS)
    .withLatestFrom(this.store.select('collections'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://myclothingapp-http.firebaseio.com/collections.json', state.collections, {reportProgress: true});
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromCollection.FeatureState>) {}
}
