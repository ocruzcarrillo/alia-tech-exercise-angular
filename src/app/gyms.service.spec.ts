import { TestBed } from '@angular/core/testing';

import { GymsService } from './gyms.service';

describe('GymsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymsService = TestBed.get(GymsService);
    expect(service).toBeTruthy();
  });
});
