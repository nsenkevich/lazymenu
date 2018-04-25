import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeYouTubeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(link: string) {
    const idInArray: Array<string> = link.split('v=');
    const id = idInArray[idInArray.length - 1];
    const url = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
