import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDoubleValue'
})
export class ToDoubleValuePipe implements PipeTransform {

  transform(counter: number): unknown {
    return counter * 2;
  }

}
