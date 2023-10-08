import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerStatistics',
  pure: true
})
export class PlayerStatisticsPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return 'Average : ' + args[0] + ' ' + ' Strike Rate : ' + args[1];
  }

}
