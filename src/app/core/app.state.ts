import {CoreState} from './store/core.state';
import {PartStoreState} from '../features/part-store/store/part-store.state';
import {PartWarehouseState} from '../features/part-warehouse/store/part-warehouse.state';

export interface AppState {
  core?: CoreState;
  partStore?: PartStoreState;
  partWarehouseStore?: PartWarehouseState;
}
