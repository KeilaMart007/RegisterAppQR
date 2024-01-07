import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaprofesorPage } from './listaprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaprofesorPageRoutingModule {}
