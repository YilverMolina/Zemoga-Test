import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GenericPageComponent } from './generic-page.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
    declarations: [
        GenericPageComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FooterModule
    ],
    exports: [
        GenericPageComponent
    ]
})
export class GenericPageModule { }
