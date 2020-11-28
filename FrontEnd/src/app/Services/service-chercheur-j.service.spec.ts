import { TestBed } from '@angular/core/testing';

import { ServiceChercheurJService } from './service-chercheur-j.service';

describe('ServiceChercheurJService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceChercheurJService = TestBed.get(ServiceChercheurJService);
    expect(service).toBeTruthy();
  });
});
