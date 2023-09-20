import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {DataService} from '../../../service/data.service';
import {PartStoreActions} from './part-store.actions';
import {catchError, EMPTY, Observable, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {FcCarPart} from '../../../../../api';

@Injectable()
export class PartStoreEffects {

  loadAllCarParts$ = createEffect(() => this.actions$.pipe(
    ofType(PartStoreActions.loadCarParts),
    switchMap(() => this.loadAllCarParts()),
    map((carParts) => PartStoreActions.loadCarPartsSuccess({carParts}))
  ));

  addCarPart$ = createEffect(() => this.actions$.pipe(
    ofType(PartStoreActions.addCarPart),
    switchMap(({carPart}) => this.addCarPart(carPart)),
    map((carPart) => PartStoreActions.addCarPartSuccess({carPart}))
  ));

  updateCarPartById$ = createEffect(() => this.actions$.pipe(
    ofType(PartStoreActions.updateCarPartById),
    switchMap(({carPartId, carPart}) => this.editCarPartById(carPartId, carPart)),
    map((carPart) => PartStoreActions.updateCarPartByIdSuccess({carPart})),
  ));


  deleteCarPartById$ = createEffect(() => this.actions$.pipe(
    ofType(PartStoreActions.deleteCarPartById),
    switchMap(({carPartId}) => this.deleteCarPartById(carPartId)),
    map((carPartId) => PartStoreActions.deleteCarPartByIdSuccess({carPartId}))
  ));

  constructor(private actions$: Actions, private store: Store, private dataService: DataService) {
  }

  private loadAllCarParts(): Observable<FcCarPart[]> {
    return this.dataService.getAllCarParts().pipe(
      catchError(err => {
        this.store.dispatch(PartStoreActions.loadCarPartsFailed());
        console.log('Message:', err.message());
        return EMPTY;
      })
    );
  }

  private addCarPart(carPart: FcCarPart): Observable<FcCarPart> {
    return this.dataService.addCarPart(carPart).pipe(
      catchError(err => {
        this.store.dispatch(PartStoreActions.addCarPartFailed());
        console.log('Message:', err.message());
        return EMPTY;
      })
    );
  }

  private editCarPartById(carPartID: number, carPart: FcCarPart): Observable<FcCarPart> {
    return this.dataService.updateCarPart(carPartID, carPart).pipe(
      catchError(err => {
        this.store.dispatch(PartStoreActions.updateCarPartByIdFailed());
        console.log('Message:', err.message());
        return EMPTY;
      })
    );
  }

  private deleteCarPartById(carPartID: number): Observable<number> {
    return this.dataService.deleteCarPart(carPartID).pipe(
      catchError(err => {
        this.store.dispatch(PartStoreActions.deleteCarPartByIdFailed());
        console.log('Message:', err.message());
        return EMPTY;
      }),
      map(() => carPartID)
    );
  }
}
