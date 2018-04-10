import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  images: Array<string>;
  //items: Array<any> = [];

  constructor(private _http: HttpClient) { 
    // this.items = [
    //   { name: 'assets/images/polo.jpg'},
    //   { name: 'assets/images/polo1.jpg'},
    //   { name: 'assets/images/polo2.jpg'},
    //   { name: 'assets/images/sweatshirt.jpg'},
    //   { name: 'assets/images/tshirt5.jpg'},
    // ]
  
  }

  ngOnInit() {
   
   }



}
