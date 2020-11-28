import { TestBed } from '@angular/core/testing';

import { ServicetypetravailService } from './servicetypetravail.service';

describe('ServicetypetravailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicetypetravailService = TestBed.get(ServicetypetravailService);
    expect(service).toBeTruthy();
  });
});
