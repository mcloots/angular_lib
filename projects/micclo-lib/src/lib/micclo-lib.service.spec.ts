import { TestBed } from '@angular/core/testing';

import { MiccloLibService } from './micclo-lib.service';

describe('MiccloLibService', () => {
  let service: MiccloLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiccloLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
