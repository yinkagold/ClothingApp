import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from './auth/auth.service';
import { HomeComponent } from './core/home/home.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', loadChildren: './collections/collections.module#CollectionsModule'},
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
