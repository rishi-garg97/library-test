import { TestBed } from '@angular/core/testing';

import { ValidationMessageGeneratorService } from './validation-message-generator.service';

describe('ValidationMessageGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationMessageGeneratorService = TestBed.get(ValidationMessageGeneratorService);
    expect(service).toBeTruthy();
  });
});
