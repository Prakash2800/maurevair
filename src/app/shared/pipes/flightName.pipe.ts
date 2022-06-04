import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'flightName',
})

export class flightNamePipe implements PipeTransform {
  transform(value: string) {
  }
}
