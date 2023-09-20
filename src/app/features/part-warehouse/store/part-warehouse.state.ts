import {FcCarPart} from '../../../../../api';

export interface PartWarehouseState {
  carParts: FcCarPart[];
  carPartsLoading: boolean;
  carPartsInWareCorp: FcCarPart[],
}

export function defaultPartWarehouseState(): PartWarehouseState {
  return {
    carParts: [],
    carPartsLoading: false,
    carPartsInWareCorp: []
  }
}
