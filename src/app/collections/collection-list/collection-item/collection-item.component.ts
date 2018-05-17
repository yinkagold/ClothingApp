import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../collection.model';
import { flyInOut, visibility, expand } from '../../../animations/app.animation';


@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class CollectionItemComponent implements OnInit {
  @Input() collection: Collection;
  @Input() index: number;



  constructor(){}
  ngOnInit() {

  }
}
