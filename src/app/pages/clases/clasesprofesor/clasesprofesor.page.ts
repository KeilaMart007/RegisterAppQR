import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clasesprofesor',
  templateUrl: './clasesprofesor.page.html',
  styleUrls: ['./clasesprofesor.page.scss'],
})
export class ClasesprofesorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async qr(){
    this.router.navigate(['mostrarqr'])
  }
  
  async lista(){
    this.router.navigate(['listaprofesor'])
  }


}
