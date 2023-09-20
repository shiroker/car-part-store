import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface DropDownItem<T> {
  name: string;
  data: T;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true
    }
  ]
})
export class DropDownComponent<T> implements OnInit, OnChanges, ControlValueAccessor{
  @Input()
  allItems: DropDownItem<T>[] = [];
  @Input()
  placeholder = '';
  @Output()
  onClick = new EventEmitter<T>();

  chosenItem(elem: T ): void {
    this.onClick.emit(elem);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
