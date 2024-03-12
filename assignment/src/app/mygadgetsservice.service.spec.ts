import { TestBed } from '@angular/core/testing';

import { MygadgetsserviceService } from './mygadgetsservice.service';

describe('MygadgetsserviceService', () => {
  let service: MygadgetsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygadgetsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
