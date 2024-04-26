import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modData'
})
export class ModDataPipe implements PipeTransform {

  transform(value: number, unit:string): number {
    if(unit === 'kPA'){
      value = value;
    } else if(unit === 'bar'){
      value = value/100;
    } else if(unit === 'psi'){
      value = value *(0.145038) ;
    }

    return value;
  }

}
