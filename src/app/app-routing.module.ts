import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/settings/about/about.component';
import { AccountSettingsComponent } from './features/settings/account-settings/account-settings.component';
import { LanguageSettingsComponent } from './features/settings/language-settings/language-settings.component';
import { SettingsMainComponent } from './features/settings/settings-main/settings-main.component';
import { ThemeSettingsComponent } from './features/settings/theme-settings/theme-settings.component';
import { InboxViewComponent }  from './features/view/inbox-view/inbox-view.component';
import { MatrixViewComponent } from './features/view/matrix-view/matrix-view.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: 'settings', 
    component: SettingsMainComponent, 
    children: [
      {path: 'account', component: AccountSettingsComponent},
      {path: 'theme', component: ThemeSettingsComponent},
      {path: 'language', component: LanguageSettingsComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: AccountSettingsComponent}
    ] 
  },
  { path: 'matrix-view', component: MatrixViewComponent },
  { path: 'inbox-view', component: InboxViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
