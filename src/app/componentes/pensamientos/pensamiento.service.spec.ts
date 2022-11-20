import { TestBed } from '@angular/core/testing';

import { PensamientoService } from './pensamiento.service';

describe('PensamientoService', () => {
  let service: PensamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
