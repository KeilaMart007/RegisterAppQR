import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesalumnoPageRoutingModule } from './clasesalumno-routing.module';

import { ClasesalumnoPage } from './clasesalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesalumnoPageRoutingModule
  ],
  declarations: [ClasesalumnoPage]
})
export class ClasesalumnoPageModule {}
