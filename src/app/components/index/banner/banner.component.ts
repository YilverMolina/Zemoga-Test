import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/contracts/models/navigation-item.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public navigationItems: NavigationItem[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.loadNavigationItems();
  }

  loadNavigationItems(): void {
    this.navigationItems = this.navigationService.getGenericNavigationItems();
  }

}
