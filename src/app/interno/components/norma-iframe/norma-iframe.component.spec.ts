import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaIframeComponent } from './norma-iframe.component';

describe('NormaIframeComponent', () => {
  let component: NormaIframeComponent;
  let fixture: ComponentFixture<NormaIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
