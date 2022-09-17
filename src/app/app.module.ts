import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddEditTaskDialogComponent } from './features/task/dialogs/add-edit-task-dialog/add-edit-task-dialog.component';
import { MatrixViewComponent } from './features/view/matrix-view/matrix-view.component';
import { MainComponent } from './features/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { InboxViewComponent } from './features/view/inbox-view/inbox-view.component';
import { DeleteTaskDialogComponent } from './features/task/dialogs/delete-task-dialog/delete-task-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SettingsMainComponent } from './features/settings/settings-main/settings-main.component';
import { ThemeSettingsComponent } from './features/settings/theme-settings/theme-settings.component';
import { AccountSettingsComponent } from './features/settings/account-settings/account-settings.component';
import { AboutComponent } from './features/settings/about/about.component';
import { MatRadioModule } from '@angular/material/radio';
import { LanguageSettingsComponent } from './features/settings/language-settings/language-settings.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function httpTranslateLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddEditTaskDialogComponent,
    MatrixViewComponent,
    MainComponent,
    InboxViewComponent,
    DeleteTaskDialogComponent,
    SettingsMainComponent,
    ThemeSettingsComponent,
    LanguageSettingsComponent,
    AccountSettingsComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatRadioModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {autoFocus: false, restoreFocus: false, scrollStrategy: new NoopScrollStrategy()}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
