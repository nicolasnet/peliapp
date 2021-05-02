import { TestBed } from '@angular/core/testing';

import { FireActoresService } from './fire-actores.service';

describe('FireActoresService', () => {
  let service: FireActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
