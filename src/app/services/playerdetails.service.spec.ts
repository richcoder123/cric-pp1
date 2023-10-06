import { TestBed } from '@angular/core/testing';

import { PlayerdetailsService } from './playerdetails.service';

describe('PlayerdetailsService', () => {
  let service: PlayerdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
