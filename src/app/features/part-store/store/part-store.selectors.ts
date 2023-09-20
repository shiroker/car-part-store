import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../../core/app.state';
import {PartStoreState} from './part-store.state';

const selectFeature = createFeatureSelector<AppState, PartStoreState>('partStore');
export const PartStoreSelectors = {
  selectAllCarParts: createSelector(selectFeature, s1 => s1.carParts),
  selectCarPartsLoading: createSelector(selectFeature, s1 => s1.carPartsLoading),
  selectSellCarPartsLoading: createSelector(selectFeature, s1 => s1.cellCarPartsLoading),
  selectRareElements: createSelector(selectFeature, s1 => s1.rareElements),
  selectErrorView: createSelector(selectFeature, s1 => s1.isErrorView),
};
