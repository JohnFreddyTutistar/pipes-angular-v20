import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase' // 'John' | toggleCase
})

export class ToogleCasePipe implements PipeTransform {

  transform( value: string, upper: boolean = false ): string {

    return upper ? value.toUpperCase() : value.toLowerCase()

  }

}
