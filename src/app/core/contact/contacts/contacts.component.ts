import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'



import { Feedback } from '../../../shared/feedback';
import { FeedbackService } from '../../../services/feedback.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements OnInit {
  
  constructor(private feedbackService: FeedbackService,
              private toastr: ToastrService){}

   ngOnInit() {
    this.resetForm();
   }

  onSubmit(feedbackForm: NgForm){
    if(feedbackForm.value.$key == null )
    this.feedbackService.insertFeedback(feedbackForm.value);
    this.toastr.success('Feedback Submitted Successfully');
    this.resetForm(feedbackForm);
   
  }
  resetForm(feedbackForm?: NgForm){
    if(feedbackForm != null)
    feedbackForm.reset();
  }

}