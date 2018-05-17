import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class JsonFetcherService {
  private _http: Http;

  constructor(private http: Http) {
    this._http = http;
  }

  public getJsonById(folder: string, file: string): any {
    const jsonLocation = '../assets/data/' + folder + '/' + file + '.json?' + Date.now();
    return this._http.get(jsonLocation)
      .map(data => data.json());
  }

}

