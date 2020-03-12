import { TestBed } from '@angular/core/testing';

import { AtividadeCadastroService } from './atividade-cadastro.service';

describe('AtividadeCadastroService', () => {
  let service: AtividadeCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtividadeCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
