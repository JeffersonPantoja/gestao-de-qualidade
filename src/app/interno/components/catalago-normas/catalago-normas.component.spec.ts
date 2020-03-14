import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalagoNormasComponent } from './catalago-normas.component';

describe('CatalagoNormasComponent', () => {
  let component: CatalagoNormasComponent;
  let fixture: ComponentFixture<CatalagoNormasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalagoNormasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalagoNormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
