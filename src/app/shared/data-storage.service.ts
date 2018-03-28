import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';



import { CollectionService } from '../collections/collection.service';
import { AuthService } from '../auth/auth-guard.service';
import { Collection } from '../collections/collection.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private collectionService: CollectionService,
              private authService: AuthService) {
  }

  storeCollections() {
    const token = this.authService.getToken();

    return this.http.put('https://myclothingapp-http.firebaseio.com/collections.json?auth=' + token, this.collectionService.getCollections());
  }

  getCollections() {
    const token = this.authService.getToken();

    this.http.get('https://myclothingapp-http.firebaseio.com/collections.json?auth=' + token)
      .map(
        (response: Response) => {
          const collections: Collection[] = response.json();
          for (let collection of collections) {
            if (!collection['designs']) {
              collection['designs'] = [];
            }
          }
          return collections;
        }
      )
      .subscribe(
        (collections: Collection[]) => {
          this.collectionService.setCollections(collections);
        }
      );
  }
}
