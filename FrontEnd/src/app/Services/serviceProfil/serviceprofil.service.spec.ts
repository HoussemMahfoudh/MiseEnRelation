import { TestBed } from '@angular/core/testing';

import { ServiceprofilService } from './serviceprofil.service';

describe('ServiceprofilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceprofilService = TestBed.get(ServiceprofilService);
    expect(service).toBeTruthy();
  });
});
