import { Component,ViewChild , OnInit, Inject} from '@angular/core';
import { NgForm, FormBuilder, FormGroup,  Validators  } from '@angular/forms';
import { flyInOut, visibility, expand } from '../../animations/app.animation';

import { Feedback } from '../../shared/feedback';
import { FeedbackService } from '../../services/feedback.services';

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
  feedbackForm: FormGroup;
	feedback: Feedback;
	feedbackcopy = null;
	loading = false;
	errMess = null;
  submitform = false;
  feedback2 = null;
  formErrors = {
		'name': '',
		'email': '',
		'phone': '',
  };
  
  validationMessages = {
		'name': {
			'required': ' Name is required.',
			'minlength': 'Name must be at least 2 characters long',
			'maxlength': 'Name cannot be more than 25 characters long'
		},
		
    'email': {
			'required': 'Email is required',
			'email': 'Email not in valid format'
    },
    
		'phone':{
			'required': 'Phone Number is required',
			'pattern': 'Phone Number must only contain numbers'
		},
		
  };
  
  constructor(private fb: FormBuilder, 
		private feedbackservice: FeedbackService,
		 @Inject('BaseURL') private BaseURL) {
	  this.createForm();
  }

  ngOnInit() {
  }
  

  createForm() {
	  this.feedbackForm = this.fb.group({
		 name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
		 phone: ['',[Validators.required, Validators.pattern ]],
     email: ['',[Validators.required, Validators.email ]],
     address: '',
		 feedback: ''
		 
	  });
	  
	  this.feedbackForm.valueChanges
	  .subscribe(data => this.onValueChanged(data));
	  
	  this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
		this.loading = true;
		this.feedback = this.feedbackForm.value;
		console.log(this.feedback);
		console.log("Submitting feedback...");
		console.log("Submitting feedback ..." + this.feedback.name);

		this.submitform = true;

		this.feedbackservice.submitFeedback(this.feedback)
		.subscribe(
			(f)=>{
				this.feedback2=f;
				this.loading = false;
				setTimeout(()=>{
					this.feedback2=null;
					
				this.submitform = false;
				},5000)
			},
      errmess => { this.feedback2 = null; this.errMess = <any>errmess; });
      this.feedbackForm.reset({
        name: '',
        email: '',
        phone: '', 
        address: '',
        feedback: ''
      });
    }

}
