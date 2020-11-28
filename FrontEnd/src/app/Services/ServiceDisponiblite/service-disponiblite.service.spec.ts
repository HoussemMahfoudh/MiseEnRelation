import { TestBed } from '@angular/core/testing';

import { ServiceDisponibliteService } from './service-disponiblite.service';

describe('ServiceDisponibliteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDisponibliteService = TestBed.get(ServiceDisponibliteService);
    expect(service).toBeTruthy();
  });
});
