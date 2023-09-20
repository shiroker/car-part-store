import {Pipe, PipeTransform} from '@angular/core';
import {TableData} from './components/data-table/data-table.component';

@Pipe({
  name: 'elementFilter'
})
export class FilterPipePipe<T> implements PipeTransform {

  transform(tableData: TableData<T>[], searchText: string): TableData<T>[] {
    if (!tableData) {
      return [];
    }
    if (!searchText) {
      return tableData;
    }
    searchText = searchText.toLocaleLowerCase();
    return tableData.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
