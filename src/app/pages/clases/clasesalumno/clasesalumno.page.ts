import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clasesalumno',
  templateUrl: './clasesalumno.page.html',
  styleUrls: ['./clasesalumno.page.scss'],
})
export class ClasesalumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lista() {
    this.router.navigate(['listalumno']);
  }

}
