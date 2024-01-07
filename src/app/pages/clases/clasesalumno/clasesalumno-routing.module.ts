import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesalumnoPage } from './clasesalumno.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesalumnoPageRoutingModule {}
