import {Pipe, PipeTransform} from '@angular/core';
import {FcNullable} from '../utilities/typedefs';

@Pipe({
  name: 'defaultArray'
})
export class DefaultArrayPipe implements PipeTransform {

  transform<T>(arr: FcNullable<T[]>): T[] {
    if (arr === undefined) {
      return [];
    }
    if (arr === null) {
      return [];
    }
    return arr;
  }

}
