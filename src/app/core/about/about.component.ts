import { Component, OnInit, Inject } from '@angular/core';
import { flyInOut, expand } from '../../animations/app.animation';
// import { Leader } from '../../shared/leader';
// import { LeaderService } from '../../services/leader.service';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  // leaders: Leader[];
  // errMess: string;

  constructor() { }

  ngOnInit() {

    // this.leaderservice.getLeaders()
    // .subscribe(leaders => this.leaders = leaders,
		// errmess => this.errMess = <any>errmess);
	  }

  }


