import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapeliculasActorComponent } from './tablapeliculas-actor.component';

describe('TablapeliculasActorComponent', () => {
  let component: TablapeliculasActorComponent;
  let fixture: ComponentFixture<TablapeliculasActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapeliculasActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapeliculasActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
