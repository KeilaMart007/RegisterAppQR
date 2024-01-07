import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListalumnoPage } from './listalumno.page';

const routes: Routes = [
  {
    path: '',
    component: ListalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListalumnoPageRoutingModule {}
