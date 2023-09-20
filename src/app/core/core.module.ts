import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {CoreEffects} from './store/core.effects';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {coreReducer} from './store/core.reducer';
import {StoreModule} from '@ngrx/store';
import {GlobalMenuComponent} from './components/global-menu/global-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {PartStoreModule} from '../features/part-store/part-store.module';
import {PartWarehouseModule} from '../features/part-warehouse/part-warehouse.module';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

const routes = [{path: 'global', component: GlobalMenuComponent}, {path: 'confirm', component: ConfirmDialogComponent}];
const components = [ConfirmDialogComponent, GlobalMenuComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    EffectsModule.forFeature([CoreEffects]),
    StoreModule.forFeature('core', coreReducer),
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatTabsModule,
    PartStoreModule,
    PartWarehouseModule,
    SharedModule,
    TranslateModule,
  ],
  providers: [],
  exports: [
    ...components,
    GlobalMenuComponent,
  ],
  bootstrap: []
})
export class CoreModule {
  public constructor() {
  }

}
