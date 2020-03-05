import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeDetalhesComponent } from './atividade-detalhes.component';

describe('AtividadeDetalhesComponent', () => {
  let component: AtividadeDetalhesComponent;
  let fixture: ComponentFixture<AtividadeDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
