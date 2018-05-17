import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Design } from '../../shared/design.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
import { ShoppingService } from '../../services/shopping.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Design;

  constructor(private store: Store<fromApp.AppState>,
              private shoppingService: ShoppingService,
              private toastr: ToastrService) { }

  ngOnInit() {
   
    this.resetForm(); 
      }
 
      onSubmit(shoppingForm: NgForm){
        if(shoppingForm.value.$key == null)
         this.shoppingService.insertDesign(shoppingForm.value);
        else 
         this.shoppingService.updateDesign(shoppingForm.value);
        this.resetForm(shoppingForm);
        this.toastr.success("Submitted Successfully", 'Shopping List');
      }

      resetForm(shoppingForm?: NgForm){
        if(shoppingForm != null)
        shoppingForm.reset();
        this.shoppingService.selectedDesign = {
          $key: null,
          name: '',
          size: '',
          amount: 0
        }
      }
  
}