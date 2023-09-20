import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DataListGrid<T> {
  title: string;
  color: string;
  payload: T;
}

@Component({
  selector: 'app-data-list-grid',
  templateUrl: './data-list-grid.component.html',
  styleUrls: ['./data-list-grid.component.css']
})
export class DataListGridComponent<T> implements OnInit {
  @Input()
  tiles: DataListGrid<T>[] = [];
  @Output()
  onClickedData = new EventEmitter<T>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getCalculatedCols(): number {
    const dataLength = this.tiles.length;
    const sqrt = Math.sqrt(dataLength);
    return Math.round(sqrt);
  }

  onClicked(tile: DataListGrid<T>) {
    this.onClickedData.emit(tile.payload);
  }
}
