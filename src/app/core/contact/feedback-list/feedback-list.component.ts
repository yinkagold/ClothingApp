import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../../../services/feedback.services';
import { Feedback } from '../../../shared/feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbackList: Feedback[];
  constructor( private feedbacKService: FeedbackService) { }

  ngOnInit() {

    var x = this.feedbacKService.getData();
    x.snapshotChanges().subscribe(item => {
      this.feedbackList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.feedbackList.push(y as Feedback);
      });
    });
  }

}
