import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Feedback } from '../shared/feedback';


@Injectable()
export class FeedbackService {
  feedbackList: AngularFireList<any>;
  selectedFeedback: Feedback = new Feedback();
  // selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.feedbackList = this.firebase.list('contact');
    return this.feedbackList;
  }
  insertFeedback(feedback : Feedback)
  {
    this.feedbackList.push({
    name: feedback.name,
    email: feedback.email,
    phone: feedback.phone,
    address: feedback.address,
    message: feedback.message
    });
  }
}