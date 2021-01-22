import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/contracts/models/navigation-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() customClass = '';
  @Input() navigationItems: NavigationItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
