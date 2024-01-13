import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaprofesor',
  templateUrl: './listaprofesor.page.html',
  styleUrls: ['./listaprofesor.page.scss'],
})
export class ListaprofesorPage implements OnInit {

  public asistencias :any[];


  constructor() {
    this.asistencias = [];
   }

  ngOnInit() {
    this.asistencias = [
      {
        group: 'Presente',
        items: [
          'Catalina Soto',
          'Luisa González'
        ]
      },
      {
        group: 'Ausente',
        items: [
          'María Fernández',
          'Mauricio Flores'
        ]
      },
      {
        group: 'Justificado',
        items: [
          'Joaquín Herrera'
        ]
      }
      
    ];
  }

}
