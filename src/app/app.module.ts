import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PartStoreModule} from './features/part-store/part-store.module';
import {coreReducer} from './core/store/core.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {ConfirmDialogComponent} from './popup-service/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {PartWarehouseModule} from './features/part-warehouse/part-warehouse.module';
import {CoreModule} from './core/core.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(coreReducer),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('core', coreReducer),
        RouterModule,
        MatTabsModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        SharedModule,
        TranslateModule,
        PartWarehouseModule,
        CoreModule,
        SharedModule,
        PartWarehouseModule,
        PartStoreModule,
        MatCardModule
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
