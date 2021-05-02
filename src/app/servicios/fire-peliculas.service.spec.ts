import { TestBed } from '@angular/core/testing';

import { FirePeliculasService } from './fire-peliculas.service';

describe('FirePeliculasService', () => {
  let service: FirePeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirePeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
