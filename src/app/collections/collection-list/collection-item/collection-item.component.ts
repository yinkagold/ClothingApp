import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../collection.model';


@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {
  @Input() collection: Collection;
  @Input() index: number;

  ngOnInit() {
  }
}
