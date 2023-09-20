import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './components/data-table/data-table.component';
import {FilterPipePipe} from './filter-pipe.pipe';
import {DropDownComponent} from './components/drop-down/drop-down.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataListGridComponent} from './components/data-list-grid/data-list-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {DataListFilterPipe} from './datalistfilter-pipe';
import {DefaultArrayPipe} from './defaultArray.pipe';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {ActionConfirmDialogComponent} from '../popup-service/confirm-dialog/action-confirm-dialog.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    DataTableComponent,
    FilterPipePipe,
    DataListFilterPipe,
    DefaultArrayPipe,
    DropDownComponent,
    DataListGridComponent,
    ActionConfirmDialogComponent,
    MenuBarComponent
  ],
  exports: [
    FilterPipePipe,
    DefaultArrayPipe,
    DataListFilterPipe,
    DataTableComponent,
    DataListGridComponent,
    DropDownComponent,
    ActionConfirmDialogComponent,
    MenuBarComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    TranslateModule,
  ]
})
export class SharedModule {
}
