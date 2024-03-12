import { TestBed } from '@angular/core/testing';

import { CharacterdetailserviceService } from './characterdetailservice.service';

describe('CharacterdetailserviceService', () => {
  let service: CharacterdetailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterdetailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
