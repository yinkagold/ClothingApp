import { Component, OnInit , Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { flyInOut, visibility, expand } from '../../animations/app.animation';

import * as fromCollection from '../store/collection.reducers';


import { Collection } from './../collection.model';


@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css'],

  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
  
})
export class CollectionListComponent implements OnInit {

  collectionState: Observable<fromCollection.State>;
  collections: Collection[];
  errMess: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromCollection.FeatureState>) { }

  ngOnInit() {
 
     this.collectionState = this.store.select('collections');
    //  this.collectionService.getCollections()
    //  .subscribe(collections => this.collections = collections,
    //   errmess => this.errMess = <any>errmess);

  }


  onNewCollection() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
