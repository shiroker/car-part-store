import {createAction, props} from '@ngrx/store';
import {FcCarPart} from '../../../../../api';

export const PartStoreActions = {
  loadCarParts: createAction('[CarPartStore] load all carParts'),
  loadCarPartsSuccess: createAction('[CarPartStore] load all carParts success', props<{ carParts: FcCarPart[] }>()),
  loadCarPartsFailed: createAction('[CarPartStore] load all carParts failed'),

  addCarPart: createAction('[CarPartStore] add carPart', props<{carPart: FcCarPart }>()),
  addCarPartSuccess: createAction('[CarPartStore] add carPart success', props<{ carPart: FcCarPart }>()),
  addCarPartFailed: createAction('[CarPartStore] add carPart failed'),

  updateCarPartById: createAction('[CarPartStore] edit carPart by id', props<{ carPartId: number, carPart: FcCarPart }>()),
  updateCarPartByIdSuccess: createAction('[CarPartStore] edit carPart by id success', props<{ carPart: FcCarPart }>()),
  updateCarPartByIdFailed: createAction('[CarPartStore] edit carPart by id failed'),

  deleteCarPartById: createAction('[CarPartStore] delete carPart by id', props<{ carPartId: number }>()),
  deleteCarPartByIdSuccess: createAction('[CarPartStore] delete carPart by id success', props<{ carPartId: number }>()),
  deleteCarPartByIdFailed: createAction('[CarPartStore] delete carPart by id failed'),

  addPartInToPackage: createAction('[CarPartStore] add the carPart in to the package', props<{ partToAdd: FcCarPart }>()),
  addPartInToPackageSuccess: createAction('[CarPartStore] add the carPart in to the package', props<{ partToAdd: FcCarPart }>()),
  addPartInToPackageFailed: createAction('[CarPartStore] add the carPart in to the package', props<{ partToAdd: FcCarPart }>()),

  removePartFromPackage: createAction('[PartStore] remove the carPart from the package', props<{ partToRemove: FcCarPart }>()),
  removePartFromPackageSuccess: createAction('[PartStore] remove the carPart from the package', props<{ partToRemove: FcCarPart }>()),
  removePartFromPackageFailed: createAction('[PartStore] remove the carPart from the package', props<{ partToRemove: FcCarPart }>()),

  cellCarParts: createAction('[PartStore] cell the carParts'),
  cellCarPartsSuccess: createAction('[PartStore] cell the carParts success', props<{ filteredCarParts: FcCarPart[] }>()),
  cellCarPartsFailed: createAction('[PartStore] cell the carParts failed', props<{ carPart: FcCarPart }>()),
  setRareElements: createAction('[PartStore] Zähle die seltenen Autoteile'),

};
