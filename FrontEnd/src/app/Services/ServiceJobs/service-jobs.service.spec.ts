import { TestBed } from '@angular/core/testing';

import { ServiceJobsService } from './service-jobs.service';

describe('ServiceJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceJobsService = TestBed.get(ServiceJobsService);
    expect(service).toBeTruthy();
  });
});
