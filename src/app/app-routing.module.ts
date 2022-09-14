import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxViewComponent }  from './features/view/inbox-view/inbox-view.component';
import { MatrixViewComponent } from './features/view/matrix-view/matrix-view.component';

const routes: Routes = [
  { path: 'matrix-view', component: MatrixViewComponent },
  { path: 'inbox-view', component: InboxViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
