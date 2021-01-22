import { Injectable } from '@angular/core';
import { NavigationItem } from '../contracts/models/navigation-item.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  public getGenericNavigationItems(): NavigationItem[] {
    const navigationItems: NavigationItem[] = [];
    navigationItems.push({
      id: 1, title: 'Past Trials', url: '/past-trials'
    });
    navigationItems.push({
      id: 1, title: 'How It Works', url: '/how-it-works'
    });
    navigationItems.push({
      id: 1, title: 'Log In / Sign Up', url: '/login'
    });
    return navigationItems;
  }
}
