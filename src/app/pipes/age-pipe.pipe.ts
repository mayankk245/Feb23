import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: Date|null|undefined , upperCase: boolean = false, emoji:boolean = false): string|null|undefined {
    if (value == null || value == undefined) return value

    let text = ' years old '
    let currentDate = new Date().getFullYear();
    let age = currentDate - value.getFullYear();

    if(upperCase){
      text = text.toUpperCase();
    }
    if(emoji){
      text = text + "🥳"
    }
    return age + text;
  }

}
