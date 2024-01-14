import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeprofesor',
  templateUrl: './homeprofesor.page.html',
  styleUrls: ['./homeprofesor.page.scss'],
})
export class HomeprofesorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async perfil(){
    this.router.navigate(['perfilprofesor'])
  }

  async clases(){
    this.router.navigate(['clasesprofesor'])
  }

}
