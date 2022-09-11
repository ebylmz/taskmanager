import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixViewComponent } from './matrix-view/matrix-view.component';

const routes: Routes = [
  { path: 'list-matrix-view', component: MatrixViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
