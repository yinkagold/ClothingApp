import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionsComponent } from './collections.component';
import { CollectionStartComponent } from './collection-start/collection-start.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionItemComponent } from './collection-list/collection-item/collection-item.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../shared/shared.module';
import { collectionReducer } from './store/collection.reducers';
import { CollectionEffects } from './store/collection.effects';
import { CollectionService } from '../services/collection.service';



@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionStartComponent,
    CollectionListComponent,
    CollectionEditComponent,
    CollectionDetailComponent,
    CollectionItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CollectionsRoutingModule,
    SharedModule,
    StoreModule.forFeature('collections', collectionReducer),
    EffectsModule.forFeature([CollectionEffects]),
   
  ],
  providers: [CollectionService ]
})
export class CollectionsModule {}
