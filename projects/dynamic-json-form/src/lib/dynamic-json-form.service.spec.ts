import { TestBed } from '@angular/core/testing';

import { DynamicJsonFormService } from './dynamic-json-form.service';

describe('DynamicJsonFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicJsonFormService = TestBed.get(DynamicJsonFormService);
    expect(service).toBeTruthy();
  });
});
