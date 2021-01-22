import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ManageMenuDirective } from './directives/manage-menu.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ManageMenuDirective
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
