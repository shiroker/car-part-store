import {defaultPartStoreState, PartStoreState} from './part-store.state';
import {Action, createReducer, on} from '@ngrx/store';
import {PartStoreActions} from './part-store.actions';
import {FcCarPart} from '../../../../../api';


function handleCellCarPartsSuccess(state: PartStoreState, filteredCarParts: FcCarPart[]): PartStoreState {
  return {
    ...state,
    cellCarPartsLoading: false,
    carParts: filteredCarParts
  };
}

function handleAdd(state: PartStoreState, carPart: FcCarPart): PartStoreState {
    return {
      ...state,
      carParts: [...state.carParts, carPart],
      carPartsLoading: false
    };
}

function handleUpdate(state: PartStoreState, carPart: FcCarPart): PartStoreState {
  const updated = [...state.carParts].map(statePart => {
    if ( statePart.id === carPart.id){
      return carPart;
    }
    else { return statePart;}
  });
  return {
    ...state,
    carParts: [...updated],
    carPartsLoading: false
  };
}

function handleDelete(state: PartStoreState, carPartId: number): PartStoreState {
  const filtered = [...state.carParts].filter(carPart => carPart.id !== carPartId);
  return {
    ...state,
    carParts: [...filtered],
    carPartsLoading: false
  };
}

const reducer = createReducer<PartStoreState, Action>(
  defaultPartStoreState(),
  on(PartStoreActions.loadCarParts, (state) => ({...state, carPartsLoading: true})),
  on(PartStoreActions.loadCarPartsFailed, (state) => ({...state, carPartsLoading: false})),
  on(PartStoreActions.loadCarPartsSuccess, (state, {carParts}) => ({...state, carParts, carPartsLoading: false})),

  on(PartStoreActions.addCarPart, (state) => ({...state, carPartsLoading: true})),
  on(PartStoreActions.addCarPartFailed, (state) => ({...state, carPartsLoading: false})),
  on(PartStoreActions.addCarPartSuccess, (state, {carPart}) => handleAdd(state, carPart)),

  on(PartStoreActions.updateCarPartById, (state) => ({...state, carPartsLoading: true})),
  on(PartStoreActions.updateCarPartByIdFailed, (state) => ({...state, carPartsLoading: false})),
  on(PartStoreActions.updateCarPartByIdSuccess, (state, {carPart}) => handleUpdate(state, carPart)),

  on(PartStoreActions.deleteCarPartById, (state) => ({...state, carPartsLoading: true})),
  on(PartStoreActions.deleteCarPartByIdFailed, (state) => ({...state, carPartsLoading: false})),
  on(PartStoreActions.deleteCarPartByIdSuccess, (state, {carPartId}) => handleDelete(state, carPartId)),


  on(PartStoreActions.cellCarParts, (state) => ({...state, cellCarPartsLoading: true})),
  on(PartStoreActions.cellCarPartsSuccess, (state, {filteredCarParts}) => handleCellCarPartsSuccess(state, filteredCarParts)),
  on(PartStoreActions.cellCarPartsFailed, (state) => ({...state, cellCarPartsLoading: false})),
);

export function CartPartReducer(partStoreState: PartStoreState, action: Action): PartStoreState {
  return reducer(partStoreState, action);
}
