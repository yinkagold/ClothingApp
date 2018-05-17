import { Action } from '@ngrx/store';

import { Collection } from '../collection.model';

export const SET_COLLECTIONS = 'SET_COLLECTIONS';
export const ADD_COLLECTION = 'ADD_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const STORE_COLLECTIONS = 'STORE_COLLECTIONS';
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';

export const LOAD_COLLECTIONS = ' LOAD_COLLECTIONS';
export const LOAD_COLLECTIONS_SUCCESS = 'LOAD_COLLECTIONS_SUCCESS';



export class SetCollections implements Action {
  readonly type = SET_COLLECTIONS;

  constructor(public payload: Collection[]) {}
}

export class AddCollection implements Action {
  readonly type = ADD_COLLECTION;

  constructor(public payload: Collection) {}
}

export class UpdateCollection implements Action {
  readonly type = UPDATE_COLLECTION;

  constructor(public payload: {index: number, updatedCollection: Collection}) {}
}

export class DeleteCollection implements Action {
  readonly type = DELETE_COLLECTION;

  constructor(public payload: number) {}
}

export class StoreCollections implements Action {
  readonly type = STORE_COLLECTIONS;
}

export class FetchCollections implements Action {
  readonly type = FETCH_COLLECTIONS;
}

export class LoadCollections implements Action {
  readonly type = LOAD_COLLECTIONS;
}

export class LoadCollectionsSuccess implements Action {
  readonly type = LOAD_COLLECTIONS_SUCCESS;
}



export type CollectionActions = SetCollections |
  AddCollection |
  UpdateCollection |
  DeleteCollection |
  StoreCollections |
  FetchCollections |
  LoadCollections|
  LoadCollectionsSuccess;
