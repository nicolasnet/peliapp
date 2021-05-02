import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepaisComponent } from './detallepais.component';

describe('DetallepaisComponent', () => {
  let component: DetallepaisComponent;
  let fixture: ComponentFixture<DetallepaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallepaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
