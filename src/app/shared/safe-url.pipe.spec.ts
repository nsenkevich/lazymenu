import { SafeYouTubeUrlPipe } from './safe-url.pipe';
import { TestBed, inject } from '@angular/core/testing';

describe('SafeYouTubeUrlPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeYouTubeUrlPipe]
    });
  });
  it('should be created', inject([SafeYouTubeUrlPipe], (service: SafeYouTubeUrlPipe) => {
    expect(service).toBeTruthy();
  }));
});
