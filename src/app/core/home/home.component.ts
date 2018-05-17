import { Component, OnInit, Inject } from '@angular/core';
import { flyInOut, visibility, expand } from '../../animations/app.animation';
// import {HttpClient} from '@angular/common/http';
// import {map} from 'rxjs/operators';


// import { CollectionService } from '../../services/collection.service';
// import { PromotionService } from '../../services/promotion.service';
// import { LeaderService } from '../../services/leader.service';

// import 'rxjs/add/observable/of';
// import { Collection } from '../../collections/collection.model';
// import { Promotion } from '../../shared/promotion';
// import { Leader } from '../../shared/leader';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

export class HomeComponent implements OnInit {

  // collection: Collection;
	// promotion: Promotion;
	// leader: Leader;
	// collectionErrMess: string;
	// promotionErrMess: string;
	// leaderErrMess: string;

  constructor() { }

  ngOnInit() {

    // this.collectionService.getFeaturedCollection().subscribe(collection => this.collection = collection,
		// 	errmess => this.collectionErrMess = <any>errmess);
		// this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, 
		// 	errmess => this.promotionErrMess = <any>errmess);
		// this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader,
		// 	errmess => this.leaderErrMess = <any>errmess);
   
   }

}
