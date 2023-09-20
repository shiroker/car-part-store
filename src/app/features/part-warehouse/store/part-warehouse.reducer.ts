import {Action, createReducer, on} from '@ngrx/store';
import {defaultPartWarehouseState, PartWarehouseState} from './part-warehouse.state';
import {PartWarehouseActions} from './part-warehouse.actions';
import {FcCarPart} from '../../../../../api';

function addCarPartToWareCorp(state: PartWarehouseState, carPart: FcCarPart): PartWarehouseState {
  if (carPart.quantity === 0){
    carPart = {...carPart, quantity: 1};
  }
  return {...state, carPartsInWareCorp: [...state.carPartsInWareCorp, carPart]};
}

const warehouseReducer = createReducer<PartWarehouseState, Action>(
  defaultPartWarehouseState(),
  on(PartWarehouseActions.loadCarPartsForOrdering, (state) => ({...state, carPartsLoading: true})),
  on(PartWarehouseActions.loadCarPartsForOrderingFailed, (state) => ({...state, carPartsLoading: false})),
  on(PartWarehouseActions.loadCarPartsForOrderingSuccess, (state, {carParts}) => ({...state, carParts, carPartsLoading: false})),
  on(PartWarehouseActions.addPartToWareCorp, (state, {carPart}) => addCarPartToWareCorp(state, carPart)),
  on(PartWarehouseActions.orderCarParts, (state) => ({...state, carPartsLoading: true})),
  on(PartWarehouseActions.orderCarPartsSuccess, (state, {carParts}) => ({...state,carParts, carPartsLoading: false})),
  on(PartWarehouseActions.orderCarPartsFailed, (state) => ({...state, carPartsLoading: false}))
);

export function CartPartWarehouseReducer(partWarehouseState: PartWarehouseState, action: Action): PartWarehouseState {
  return warehouseReducer(partWarehouseState, action);
}
