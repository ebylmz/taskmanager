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

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddEditTaskDialogComponent,
    MatrixViewComponent,
    MainComponent,
    InboxViewComponent,
    DeleteTaskDialogComponent,
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
    MatGridListModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {autoFocus: false, restoreFocus: false, scrollStrategy: new NoopScrollStrategy()}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
