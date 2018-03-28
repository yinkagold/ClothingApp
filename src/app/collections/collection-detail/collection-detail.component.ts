import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';


@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {
  collection: Collection;
  id: number;
  constructor(private collectionService: CollectionService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
  this.route.params
  .subscribe(
  (params: Params) => {
  this.id = +params['id'];
  this.collection = this.collectionService.getCollection(this.id);
  }
);
}

  onAddToShoppingList() {
  this.collectionService.addDesignToShoppingList(this.collection.designs);
  }

  onEditCollection() {
  this.router.navigate(['edit'], {relativeTo: this.route});
  // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCollection() {
  this.collectionService.deleteCollection(this.id);
  this.router.navigate(['/collections']);
  this.router.navigate(['/delete'], {relativeTo: this.route});
  }

}
