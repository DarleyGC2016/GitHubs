import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime',
})
export class LocalDateTimePipe implements PipeTransform {
  transform(date: string): string {
    const resultado: moment.Moment = moment(date, 'YYYY-MM-DDTHH:mm:ssZ');
    return resultado.format('DD/MM/YYYY  HH:mm');
  }
}
