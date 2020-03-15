import { TestBed } from '@angular/core/testing';

import { AcessoGestorGuard } from './acesso-gestor.guard';

describe('AcessoGestorGuard', () => {
  let guard: AcessoGestorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AcessoGestorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
