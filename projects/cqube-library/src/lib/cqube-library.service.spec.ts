import { TestBed } from '@angular/core/testing';

import { CqubeLibraryService } from './cqube-library.service';

describe('CqubeLibraryService', () => {
  let service: CqubeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CqubeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
