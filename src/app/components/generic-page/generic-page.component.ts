import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/contracts/models/navigation-item.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss']
})
export class GenericPageComponent implements OnInit {

  @Input() pageTitle = '';
  public navigationItems: NavigationItem[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.loadNavigationItems();
  }

  loadNavigationItems(): void {
    this.navigationItems = this.navigationService.getGenericNavigationItems();
  }
}
