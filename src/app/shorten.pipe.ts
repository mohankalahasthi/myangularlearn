import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "Shorten"
})
export class ShortenPipe implements PipeTransform {
  // with out parameter

  //   transform(value: any) {
  //     if (value.length > 10) {
  //       return value.substr(0, 10) + "...";
  //     }
  //     return value;
  //   }
  // -----------with parametes------------
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + "...";
    }
    return value;
  }
}
