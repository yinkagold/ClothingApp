import { NgModule } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CollectionsComponent } from './collections.component';
import { CollectionStartComponent } from './collection-start/collection-start.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionItemComponent } from './collection-list/collection-item/collection-item.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        CollectionsComponent,
        CollectionStartComponent,
        CollectionDetailComponent,
        CollectionListComponent,
        CollectionEditComponent,
        CollectionItemComponent,
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CollectionsRoutingModule,
        SharedModule
    ]
})
export class CollectionsModule{
    
}