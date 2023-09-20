import {Action, createReducer} from '@ngrx/store';
import {CoreState, defaultCoreState} from './core.state';

const reducer = createReducer<CoreState, Action>(  defaultCoreState());

export function coreReducer(coreState: CoreState, action: Action): CoreState {
  return reducer(coreState, action);
}
