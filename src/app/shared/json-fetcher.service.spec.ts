import { TestBed, inject } from '@angular/core/testing';

import { JsonFetcherService } from './json-fetcher.service';

describe('JsonFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonFetcherService]
    });
  });

  it('should be created', inject([JsonFetcherService], (service: JsonFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
