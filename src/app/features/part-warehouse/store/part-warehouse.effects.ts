import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {DataService} from '../../../service/data.service';
import {catchError, EMPTY, Observable, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {PartWarehouseActions} from './part-warehouse.actions';
import {FcCarPart} from '../../../../../api';
import {PartWarehouseSelectors} from './part-warehouse.selectors';

@Injectable()
export class CarPartWarehouseEffects {
  loadAllCarParts$ = createEffect(() => this.actions$.pipe(
    ofType(PartWarehouseActions.loadCarPartsForOrdering),
    switchMap(() => this.loadAllCarPartsForOrdering()),
    map((carParts) => PartWarehouseActions.loadCarPartsForOrderingSuccess({carParts}))
  ));

  orderCarParts$ = createEffect(() => this.actions$.pipe(
    ofType(PartWarehouseActions.orderCarParts),
    switchMap(() => this.store.select(PartWarehouseSelectors.selectPartsFromWareCorp)),
    switchMap((carParts) => this.orderCarParts(carParts)),
    map((carParts) => PartWarehouseActions.orderCarPartsSuccess({carParts}))
  ));

  constructor(private actions$: Actions, private store: Store, private dataService: DataService) {
  }

  private loadAllCarPartsForOrdering(): Observable<FcCarPart[]> {
    return this.dataService.getAllCarParts().pipe(
      catchError(err => {
        this.store.dispatch(PartWarehouseActions.loadCarPartsForOrderingFailed());
        console.log('Message:', err.message());
        return EMPTY;
      })
    );
  }

  private orderCarParts(carParts: FcCarPart[]): Observable<FcCarPart[]> {
    return this.dataService.orderCarParts(carParts).pipe(
      catchError(err => {
        this.store.dispatch(PartWarehouseActions.orderCarPartsFailed());
        console.log('Message:', err.message());
        return EMPTY;
      })
    );
  }
}
