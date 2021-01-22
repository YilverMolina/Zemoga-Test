import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { PastTrialsComponent } from './components/past-trials/past-trials.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'past-trials', component: PastTrialsComponent
  },
  {
    path: 'how-it-works', component: HowItWorksComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
