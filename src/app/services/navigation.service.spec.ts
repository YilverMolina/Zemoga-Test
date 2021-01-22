import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service).toBeTruthy();
  });

  it('navigation items should be defined', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service.getGenericNavigationItems()).toBeDefined();
  });

  it('navigation items should be 3', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service.getGenericNavigationItems().length).toEqual(3);
  });

  it('names of navigation items should be correct', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service.getGenericNavigationItems()[0].title).toEqual('Past Trials');
    expect(service.getGenericNavigationItems()[1].title).toEqual('How It Works');
    expect(service.getGenericNavigationItems()[2].title).toEqual('Log In / Sign Up');
  });
});
