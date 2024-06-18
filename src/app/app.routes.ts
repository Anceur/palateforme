import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvicesComponent } from './ya/advices/advices.component';
import { FaqsComponent } from './ya/faqs/faqs.component';
import { NewsComponent } from './ya/news/news.component';
import { PrivacyPolicyComponent } from './ya/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'advices', component: AdvicesComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
