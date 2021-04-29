import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaactorComponent } from './altaactor.component';

describe('AltaactorComponent', () => {
  let component: AltaactorComponent;
  let fixture: ComponentFixture<AltaactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
