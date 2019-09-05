import { TestBed } from '@angular/core/testing';

import { FormBuildingService } from './form-building.service';

describe('FormBuildingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBuildingService = TestBed.get(FormBuildingService);
    expect(service).toBeTruthy();
  });
});
