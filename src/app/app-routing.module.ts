import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './features/login/sign-in/sign-in.component';
import { SignUpComponent } from './features/login/sign-up/sign-up.component';
import { AboutComponent } from './features/settings/about/about.component';
import { AccountSettingsComponent } from './features/settings/account-settings/account-settings.component';
import { LanguageSettingsComponent } from './features/settings/language-settings/language-settings.component';
import { SettingsMainComponent } from './features/settings/settings-main/settings-main.component';
import { ThemeSettingsComponent } from './features/settings/theme-settings/theme-settings.component';
import { InboxViewComponent }  from './features/view/inbox-view/inbox-view.component';
import { MatrixViewComponent } from './features/view/matrix-view/matrix-view.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'matrix-view', component: MatrixViewComponent, canActivate: [AuthGuard] },
  { path: 'inbox-view', component: InboxViewComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'inbox-view', pathMatch: 'full' },
  
  { path: 'settings', component: SettingsMainComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'account', component: AccountSettingsComponent, canActivate: [AuthGuard] },
      { path: 'theme', component: ThemeSettingsComponent, canActivate: [AuthGuard] },
      { path: 'language', component: LanguageSettingsComponent, canActivate: [AuthGuard] },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'account', pathMatch: 'full' }
    ] 
  },

  // { path: '', canActivate: [AuthGuard], redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
