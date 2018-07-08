import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageConverterService {

  constructor(private http: Http) { }

  public getImageFromUrl(imageUrl: string): Observable<string> {
    return this.http
      .get(imageUrl, { responseType: ResponseContentType.Blob })
      .map((res: any) => 'data:image/jpeg;base64,' + JSON.parse(res));
  }

}
