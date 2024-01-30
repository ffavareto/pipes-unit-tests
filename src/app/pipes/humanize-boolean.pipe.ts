import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeBoolean',
  standalone: true
})
export class HumanizeBooleanPipe implements PipeTransform {
  transform(value: boolean, capitalize = true) {
    if (value === true) {
      if (capitalize) {
        return 'Sim';
      } else {
        return 'sim';
      }
    }
    
    if (capitalize) {
      return 'Não';
    } else {
      return 'não';
    }
  }
}
