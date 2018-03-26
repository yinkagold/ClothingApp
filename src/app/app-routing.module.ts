import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsComponent } from './collections/collections.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CollectionStartComponent } from './collections/collection-start/collection-start.component';
import { CollectionDetailComponent } from './collections/collection-detail/collection-detail.component';
import { CollectionEditComponent } from './collections/collection-edit/collection-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full' },
  { path: 'collections', component: CollectionsComponent, children: [
    { path: '', component: CollectionStartComponent },
    { path: 'new', component: CollectionEditComponent },
    { path: ':id', component: CollectionDetailComponent },
    { path: ':id/edit', component: CollectionEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
