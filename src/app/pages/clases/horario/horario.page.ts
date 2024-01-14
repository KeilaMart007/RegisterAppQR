import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: 'horario.page.html',
  styleUrls: ['horario.page.scss'],
})
export class HorarioPage {

  constructor(private router: Router) { }

  irALeerQR() {
    this.router.navigate(['/leerqr']);
  }

}

