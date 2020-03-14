import { TestBed } from '@angular/core/testing';

import { CatalogoNormasService } from './catalogo-normas.service';

describe('CatalogoNormasService', () => {
  let service: CatalogoNormasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoNormasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
