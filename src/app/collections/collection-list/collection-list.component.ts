import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromCollection from '../store/collection.reducers';
import { CollectionService } from '../../services/collection.service';
import { Collection } from './../collection.model';
@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  collectionState: Observable<fromCollection.State>;
  collections: Collection[];
  errMess: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromCollection.FeatureState>,
              private collectionService: CollectionService) {
  }

  ngOnInit() {
    // this.collectionService.getCollections()
    // .subscribe(collections => this.collections = collections,
    // errmess => this.errMess = <any>errmess)

    this.collectionState = this.store.select('collections');
  }

  onNewCollection() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
