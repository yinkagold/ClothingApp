import { Injectable } from '@angular/core';
import { Collection } from '../collections/collection.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { error } from 'util';

@Injectable()
export class CollectionService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  
   getCollections(): Observable<Collection[]> {
    return this.restangular.all('collections').getList();
  }
}