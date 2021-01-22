import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appManageMenu]'
})
export class ManageMenuDirective implements AfterViewInit {

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    const menuIcon = this.element.nativeElement;
    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        var navMenu = document.getElementById('navigation-menu');
        var menuIcon = document.getElementById('icn-menu');
        if (navMenu) {
          navMenu.classList.toggle('mobile-menu-visible');
        }
        if (menuIcon) {
          menuIcon.classList.toggle('fa-bars');
          menuIcon.classList.toggle('fa-close');
        }
      });
    }
  }
}
