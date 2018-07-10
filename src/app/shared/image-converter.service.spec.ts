import { TestBed, inject } from '@angular/core/testing';

import { ImageConverterService } from './image-converter.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';

xdescribe('ImageConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageConverterService, Http, ConnectionBackend],
    });
  });

  it('should be created', inject([ImageConverterService], (service: ImageConverterService) => {
    expect(service).toBeTruthy();
  }));
});
