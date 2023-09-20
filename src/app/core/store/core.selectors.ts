import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoreState} from './core.state';

const selectFeature = createFeatureSelector<CoreState>('core');
export const CoreSelectors = {
  selectAllMenuItems: createSelector(selectFeature, s1 => s1.allMenuItems)
}
