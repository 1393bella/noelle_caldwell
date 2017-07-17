import { Pipe, PipeTransform } from '@angular/core';
import { Bicycle } from "./bicycle";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Bicycle>, searchStr: string): Array<Bicycle> {
    return value.filter(bike => {
      return bike.title.toLowerCase().includes(searchStr.toLowerCase()) || bike.description.toLowerCase().includes(searchStr.toLowerCase())
    })
  }

}
