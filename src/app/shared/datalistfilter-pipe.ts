import {Pipe, PipeTransform} from '@angular/core';
import {DataListGrid} from './components/data-list-grid/data-list-grid.component';

@Pipe({
  name: 'dataListFilter'
})
export class DataListFilterPipe<T> implements PipeTransform {

  transform(tableData: DataListGrid<T>[], searchText: string): DataListGrid<T>[] {
    if (!tableData) {
      return [];
    }
    if (!searchText) {
      return tableData;
    }
    searchText = searchText.toLocaleLowerCase();
    return tableData.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }

}
