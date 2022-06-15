import { TestBed } from '@angular/core/testing';

import { AudiotextService } from './audiotext.service';

describe('AudiotextService', () => {
  let service: AudiotextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiotextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
