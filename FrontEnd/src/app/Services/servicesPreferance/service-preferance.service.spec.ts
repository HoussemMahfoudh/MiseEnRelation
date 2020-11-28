import { TestBed } from '@angular/core/testing';

import { ServicePreferanceService } from './service-preferance.service';

describe('ServicePreferanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePreferanceService = TestBed.get(ServicePreferanceService);
    expect(service).toBeTruthy();
  });
});
