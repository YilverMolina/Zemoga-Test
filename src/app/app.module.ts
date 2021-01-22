import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/index/banner/banner.component';
import { CountedComponent } from './components/index/counted/counted.component';
import { SubmitComponent } from './components/index/submit/submit.component';
import { VotesComponent } from './components/index/votes/votes.component';
import { IndexComponent } from './components/index/index.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { LoginComponent } from './components/login/login.component';
import { PastTrialsComponent } from './components/past-trials/past-trials.component';
import { GenericPageComponent } from './components/generic-page/generic-page.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { VoteComponent } from './components/index/votes/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CountedComponent,
    SubmitComponent,
    VotesComponent,
    IndexComponent,
    HowItWorksComponent,
    LoginComponent,
    PastTrialsComponent,
    GenericPageComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
