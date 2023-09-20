import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {DropDownItem} from '../../../../shared/components/drop-down/drop-down.component';
import {DataConverterService} from '../../../../service/dataConverterService';
import {Store} from '@ngrx/store';
import {PartStoreActions} from '../../store/part-store.actions';
import {FcCarMarke, FcCarPart, FcCarPartType} from '../../../../../../api';

@Component({
  selector: 'app-add-car-part',
  templateUrl: './add-car-part.component.html',
  styleUrls: ['./add-car-part.component.css']
})
export class AddCarPartComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  allCarPartTypes$: Observable<DropDownItem<FcCarPartType>[]>;
  allCarMarke$: Observable<DropDownItem<FcCarMarke>[]>;
  carPartTypePlaceholder = FcCarPartType.Sonstiges;
  carMarkePlaceholder = FcCarMarke.Sonstiges;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private dataConverterService: DataConverterService) {
    this.allCarPartTypes$ = this.dataConverterService.getAllCarPartTypesForDropDown();
    this.allCarMarke$ = this.dataConverterService.getAllCarMarkeForDropDown();
  }

  onAddClicked(): void {
    const carPart: FcCarPart = {
      name: this.formGroup.get('name')?.value,
      carModel: this.formGroup.get('model')?.value,
      quantity: this.formGroup.get('quantity')?.value,
      quantityLimit: this.formGroup.get('quantityLimit')?.value,
      packageCount: this.formGroup.get('packageCount')?.value,
      carPartType: this.carPartTypePlaceholder,
      price: this.formGroup.get('price')?.value,
      carMarke: this.carMarkePlaceholder,
      id: -1,
      rabatt: 1,
      barCode: '',
      totalWeightInKg: 1,
      volumeInCube: 0.2
    };
    this.store.dispatch(PartStoreActions.addCarPart({carPart}));
  }

  ngOnInit(): void {
    this.recreateForm();
  }

  private recreateForm() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl({value: '', disabled: false}, []),
      model: new FormControl({value: '', disabled: false}, []),
      quantityLimit: new FormControl({value: '', disabled: false}, []),
      quantity: new FormControl({value: '', disabled: false}, []),
      packageCount: new FormControl({value: '', disabled: false}, []),
      price: new FormControl({value: '', disabled: false}, [])
    });
  }

  carPartTypeChange(partType: FcCarPartType): void {
    this.carPartTypePlaceholder = partType;
  }

  carMarkeChange(carMarke: FcCarMarke): void {
    this.carMarkePlaceholder = carMarke;
  }
}
