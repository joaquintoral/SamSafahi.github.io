import { TestBed, inject } from '@angular/core/testing';

import { ComartService } from './comart.service';

describe('ComartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComartService]
    });
  });

  it('should be created', inject([ComartService], (service: ComartService) => {
    expect(service).toBeTruthy();
  }));
});
