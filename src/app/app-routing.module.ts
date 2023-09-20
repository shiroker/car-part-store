import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./core/core.module').then(value => value.CoreModule),
  },
  {
    path: 'verwaltung',
    loadChildren: () => import('./features/part-store/part-store.module').then(value => value.PartStoreModule),
  },
  {
    path: 'start/bestellung',
    loadChildren: () => import('./features/part-warehouse/part-warehouse.module').then(value => value.PartWarehouseModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
