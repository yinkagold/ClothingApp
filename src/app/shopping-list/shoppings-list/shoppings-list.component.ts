import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../../services/shopping.service';
import { Design } from '../../shared/design.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shoppings-list',
  templateUrl: './shoppings-list.component.html',
  styleUrls: ['./shoppings-list.component.css']
})
export class ShoppingsListComponent implements OnInit {

  shoppingsList: Design[];

  constructor(private shoppingService: ShoppingService,
              private toastr: ToastrService ) { }

  ngOnInit() {
    this.shoppingService.getData();
    var x = this.shoppingService.getData();
    x.snapshotChanges().subscribe(item => {
      this.shoppingsList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.shoppingsList.push(y as Design);
      });
    });
  }

  onEdit(dsg : Design){
    this.shoppingService.selectedDesign = Object.assign({}, dsg);
  }

  onDelete(key : string){
    if(confirm('Are you sure you want to delete this item ?') == true){ 
    this.shoppingService.deleteDesign(key);
    this.toastr.warning("Deleted Successfully", "Shopping List");
    }
  }

}
