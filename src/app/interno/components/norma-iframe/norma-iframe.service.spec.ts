import { TestBed } from '@angular/core/testing';

import { NormaIframeService } from './norma-iframe.service';

describe('NormaIframeService', () => {
  let service: NormaIframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormaIframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
