import { TestBed } from '@angular/core/testing';

import { FireDataService } from './FireDataService';

describe('FireDataService', () => {
  let service: FireDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
