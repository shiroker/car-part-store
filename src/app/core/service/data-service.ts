import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService{
  part?: CarPart;
}
export interface CarPart {
  name: string;
  id: string;
  quantity: number;
}
