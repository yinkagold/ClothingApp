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

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Design;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
    .subscribe(
      data => {
        if(data.editedDesignIndex > -1){
          this.editedItem = data.editedDesign;
          this.editMode = true;
          this.slForm.setValue({
            name: this.editedItem.name,
            size: this.editedItem.size,
            amount: this.editedItem.amount,
          })
        }else{
          this.editMode = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDesign = new Design(value.name,value.size, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateDesign({design: newDesign}))
    } else {
      this.store.dispatch(new ShoppingListActions.AddDesign(newDesign))
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteDesign());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit)
    this.subscription.unsubscribe();
  }

}
