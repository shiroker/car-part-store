import {DataService} from './data.service';
import {Observable, of} from 'rxjs';
import {DropDownItem} from '../shared/components/drop-down/drop-down.component';
import {map} from 'rxjs/operators';
import {CarPart} from './data';
import {Injectable} from '@angular/core';
import {FcCarMarke, FcCarPartType} from '../../../api';

@Injectable({
  providedIn: 'root'
})
export class DataConverterService {
  constructor(private service: DataService) {
  }

  getAllCarPartTypesExistInDataForDropDown(): Observable<DropDownItem<string>[]> {
    return this.service.getAllCarParts().pipe(
      map(allParts => this.createDropDownOptionsForTypes(allParts))
    );
  }

  private createDropDownOptionsForTypes(allParts: CarPart[]): DropDownItem<string>[] {
    return this.removeDuplicateTypes(allParts).map(partType => {
      return {
        name: partType.toString(),
        data: partType
      };
    });
  }

  private removeDuplicateTypes(allParts: CarPart[]): string[] {
    const allUniqueTypes: string[] = [];
    [...allParts].forEach(part => {
      if (!allUniqueTypes.includes(part.carPartType.toString())) {
        allUniqueTypes.push(part.carPartType.toString());
      }
    });
    return allUniqueTypes;
  }

  getAllCarMarkeForDropDown(): Observable<DropDownItem<FcCarMarke>[]> {
    return of(allCarMarke.map(marke => {
      const data: DropDownItem<FcCarMarke> = {
        name: marke.toString(),
        data: marke
      };
      return data;
    }));
  }

  getAllCarPartTypesForDropDown(): Observable<DropDownItem<FcCarPartType>[]> {
    return of(allCarPartType.map(type => {
      const data: DropDownItem<FcCarPartType> = {
        name: type.toString(),
        data: type
      };
      return data;
    }));
  }
}

export const allCarPartType: FcCarPartType[] = [
  'REIFEN_FELGEN',
  'SCHEIBEN',
  'SONSTIGES',
  'KAROSSERIE',
  'INNEN_AUSSTATTUNG',
  'SCHRAUBEN',
  'MOTOR',
  'FLUESSIGKEIT',
  'FARBE'
];


export const allCarMarke: FcCarMarke[] = [
  'ALPHA_ROMEO',
  'AUDI',
  'BENTLEY',
  'BMW',
  'BUGATTI',
  'CHEVROLET',
  'CHRYSLER',
  'CITROEN',
  'DACIA',
  'DAEWOO',
  'DAIHATSU',
  'DODGE',
  'FERRARI',
  'FIAT',
  'FORD',
  'HONDA',
  'HYUNDAI',
  'JAGUAR',
  'JEEP',
  'KIA',
  'LADA',
  'LAMBORGHINI',
  'LAND_ROVER',
  'LEXUS',
  'MASERATI',
  'MAZDA',
  'MERCEDES_BENZ',
  'MINI',
  'MITSUBISHI',
  'MORGAN',
  'NISSAN',
  'OPEL',
  'PEUGEOT',
  'PORSCHE',
  'RENAULT',
  'ROLLS_ROYCE',
  'SEAT',
  'SKODA',
  'SUBARU',
  'SUZUKI',
  'TESLA',
  'TOYOTA',
  'VOLKSWAGEN',
  'VOLVO',
  'SONSTIGES'
];
