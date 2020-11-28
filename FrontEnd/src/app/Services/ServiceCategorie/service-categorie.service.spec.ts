import { TestBed } from '@angular/core/testing';

import { ServiceCategorieService } from './service-categorie.service';

describe('ServiceCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCategorieService = TestBed.get(ServiceCategorieService);
    expect(service).toBeTruthy();
  });
});
