import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homealumno',
  templateUrl: './homealumno.page.html',
  styleUrls: ['./homealumno.page.scss'],
})
export class HomealumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  async perfil(){
    this.router.navigate(['perfilalumno'])
  }

  async clases(){
    this.router.navigate(['clasesalumno'])
  }

  async horario(){
    this.router.navigate(['horario'])
  }

  async qr(){
    this.router.navigate(['leerqr'])
  }


}
