import { Injectable } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { error } from 'util';
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';




@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback[]> {
    console.log("Feecback form posted in restangular service");
    //var returnForm = this.restangular.all('feedback').post(feedback);
    return this.restangular.all('feedback').post(feedback);
  }
}
