import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common'
import { format } from 'highcharts';

@Pipe({
  name: 'editDate'
})
export class EditDatePipe implements PipeTransform {

  constructor(public datepipe: DatePipe){}

  transform(datefromdb: string, mod:string): string {
    let latest_date = this.datepipe.transform(datefromdb, mod);



    return latest_date ? latest_date : '';
   }

}
