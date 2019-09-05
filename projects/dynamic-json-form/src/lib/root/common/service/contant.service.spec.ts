import { TestBed } from '@angular/core/testing';

import { ContantService } from './contant.service';

describe('ContantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContantService = TestBed.get(ContantService);
    expect(service).toBeTruthy();
  });
});
