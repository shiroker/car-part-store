import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {DropDownItem} from '../../../../shared/components/drop-down/drop-down.component';
import {FcCarPart} from '../../../../../../api';
import {Store} from '@ngrx/store';
import {PartWarehouseSelectors} from '../../store/part-warehouse.selectors';
import {map} from 'rxjs/operators';
import {PartWarehouseActions} from '../../store/part-warehouse.actions';

@Component({
  selector: 'app-part-order-page',
  templateUrl: './part-order-page.component.html',
  styleUrls: ['./part-order-page.component.css']
})
export class PartOrderPageComponent implements OnInit {
  formGroup: FormGroup;
  allCarParts$: Observable<DropDownItem<FcCarPart>[]>;
  carPartsPlaceholder = 'Wählen Sie den Teil';
  carPart?: FcCarPart;
  constructor(private store: Store, private fb: FormBuilder) {
    this.store.dispatch(PartWarehouseActions.loadCarPartsForOrdering());
    this.allCarParts$ = this.store.select(PartWarehouseSelectors.selectAllParts).pipe(
      map(all => this.mapToDropDownItems(all)));
    this.formGroup = this.fb.group({
      packageCount: new FormControl
    })
  }

  ngOnInit(): void {
  }

  carPartChange(carPart: FcCarPart): void {
    this.carPart = carPart;
    this.carPartsPlaceholder = this.createPartLabel(carPart);

  }

  addToWareCorp(): void {
    if (this.carPart){
      const packageCount: number =this.carPart.packageCount + Number(this.formGroup.get('packageCount')?.value);
      if (packageCount){
        this.carPart = {
          ...this.carPart,
          packageCount
        };
        this.store.dispatch(PartWarehouseActions.addPartToWareCorp({carPart: this.carPart}));
      }

    }
  }

  orderAllParts() {
    this.store.dispatch(PartWarehouseActions.orderCarParts());
  }
  private mapToDropDownItems(all: FcCarPart[]): DropDownItem<FcCarPart>[] {
    return all.map(part => {
      return {
        name: this.createPartLabel(part),
        data: part
      }
    });
  }

  private createPartLabel(part: FcCarPart): string {
    return `${part.name}  ${part.carMarke} ${part.carModel}`;
  }
}
