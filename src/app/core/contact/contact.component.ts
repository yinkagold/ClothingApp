import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { flyInOut, visibility, expand } from '../../animations/app.animation';

import { Feedback } from '../../shared/feedback';
import { FeedbackService } from '../../services/feedback.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements OnInit {
  
  
   ngOnInit() {
   }


}