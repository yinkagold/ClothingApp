import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 loadedFeature = 'collection';

 ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyDSWsIym3uRm4pIu71esgdGlYuriePEy-M",
    authDomain: "myclothingapp-http.firebaseapp.com",
   });

 }

 onNavigate(feature: string) {
  this.loadedFeature = feature;
  }
}
