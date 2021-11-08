import { TestBed } from '@angular/core/testing';

import { MethodsServiceService } from './methods-service.service';

describe('MethodsServiceService', () => {
  let service: MethodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
