import {FcCarPart} from '../../../../../api';

export interface PartStoreState {
  carParts: FcCarPart[];
  carPartsLoading: boolean;
  cellCarPartsLoading: boolean;
  rareElements: number;
  isErrorView: boolean;
}

export function defaultPartStoreState(): PartStoreState {
  return {
    carParts: [],
    carPartsLoading: false,
    cellCarPartsLoading: false,
    rareElements: 0,
    isErrorView: false,
  };
}
