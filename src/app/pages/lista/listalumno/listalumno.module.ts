import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListalumnoPageRoutingModule } from './listalumno-routing.module';

import { ListalumnoPage } from './listalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListalumnoPageRoutingModule
  ],
  declarations: [ListalumnoPage]
})
export class ListalumnoPageModule {}
