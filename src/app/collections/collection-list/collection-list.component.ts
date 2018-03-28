import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collections: Collection[];
  subscription: Subscription;

  constructor(private collectionService: CollectionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.collectionService.collectionsChanged
      .subscribe(
        (collections: Collection[]) => {
          this.collections = collections;
        }
      );
    this.collections = this.collectionService.getCollections();
  }

  onNewCollection() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
