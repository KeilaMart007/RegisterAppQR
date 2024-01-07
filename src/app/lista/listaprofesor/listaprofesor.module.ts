import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaprofesorPageRoutingModule } from './listaprofesor-routing.module';

import { ListaprofesorPage } from './listaprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaprofesorPageRoutingModule
  ],
  declarations: [ListaprofesorPage]
})
export class ListaprofesorPageModule {}
