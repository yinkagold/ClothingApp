import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { flyInOut, visibility, expand } from '../../animations/app.animation';
import 'rxjs/add/operator/take';

import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromCollection from '../store/collection.reducers';
import * as CollectionActions from '../store/collection.actions';



@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
	animations: [
		flyInOut(),
		visibility(),
		expand()
  ]

})

export class CollectionDetailComponent implements OnInit {
  collectionState: Observable<fromCollection.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromCollection.FeatureState>) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.collectionState = this.store.select('collections');
        }
      );
  }

  onAddToShoppingList() {
    this.store.select('collections')
      .take(1)
      .subscribe((collectionState: fromCollection.State) => {
        this.store.dispatch(new ShoppingListActions.AddDesigns(
          collectionState.collections[this.id].designs)
        );
      });

  }

  onEditCollection() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCollection() {
    this.store.dispatch(new CollectionActions.DeleteCollection(this.id));
    this.router.navigate(['/collections']);
  }

}
