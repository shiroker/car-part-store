import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface TableData<T> {
  id: number;
  name: string;
  totalPrice: string;
  weight: string;
  description: string;
  quantity: number;
  quantityLimit: number;
  packageCount: number;
  payload: T;
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T> implements OnInit {
  @Input()
  headerLabel = '';
  @Input()
  tableData: TableData<T>[] = [];
  @Input()
  displayedColumns: string[] = [];

  @Input()
  rowTemplate?: TemplateRef<RowTemplateContext<T>>;

  @Output()
  generateRabatClick = new EventEmitter<T>();

  @Output()
  removeItemClick = new EventEmitter<number>();

  dataSource = new MatTableDataSource<TableData<T>>;
  selection = new SelectionModel<TableData<T>>(true, []);

  constructor() {
  }

  ngOnInit(): void {
  }

  getTableDataSource(): MatTableDataSource<TableData<T>> {
    this.dataSource = new MatTableDataSource<TableData<T>>(this.tableData);
    return this.dataSource;
  }

}


export interface RowTemplateContext<Data> {
  $implicit: Data;
  row: Data;
  rowIndex: number;
}
