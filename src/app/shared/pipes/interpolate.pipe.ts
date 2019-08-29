import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolate'
})
export class InterpolatePipe implements PipeTransform {

  transform(value: string, args: object): any {
    if (value) {
      Object.entries(args).forEach(([pKey, pArg]) => {
        value = value.replace(new RegExp(`{\\s*${pKey}\\s*}`), pArg);
      });
    }

    return value;
  }

}
