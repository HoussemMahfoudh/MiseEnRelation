import { TestBed } from '@angular/core/testing';

import { ServiceCandidatureService } from './service-candidature.service';

describe('ServiceCandidatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCandidatureService = TestBed.get(ServiceCandidatureService);
    expect(service).toBeTruthy();
  });
});
