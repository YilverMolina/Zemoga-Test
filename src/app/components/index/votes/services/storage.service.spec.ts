import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('votes should be created in storage', () => {
    // given
    const service: StorageService = TestBed.get(StorageService);

    // when
    service.manageLocalStorage();

    // then
    expect(service.getItem('votes')).not.toBeNull();
  });
});
