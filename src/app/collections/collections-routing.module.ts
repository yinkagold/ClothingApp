import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { CollectionsComponent } from './collections.component';
import { CollectionStartComponent } from './collection-start/collection-start.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { AuthGuard } from '../auth/auth.service';

const collectionsRoutes: Routes = [
    { path: '', component: CollectionsComponent, children: [
        { path: '', component: CollectionStartComponent },
        { path: 'new', component: CollectionEditComponent, canActivate: [AuthGuard] },
        { path: ':id', component: CollectionDetailComponent },
        { path: ':id/edit', component: CollectionEditComponent, canActivate: [AuthGuard] },
      ] },
];

@NgModule({
 imports: [
     RouterModule.forChild(collectionsRoutes)
 ], 
 exports: [RouterModule]
})

export class CollectionsRoutingModule{

}