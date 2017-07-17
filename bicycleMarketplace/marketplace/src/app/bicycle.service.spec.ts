import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './bicycle.service';

describe('BicycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
