import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.page.html',
  styleUrls: ['./perfilalumno.page.scss'],
})
export class PerfilalumnoPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private authFire: AuthfirebaseService, private router: Router) { }

  ngOnInit() {
  }

  
  async logout() {
    try {
      await this.authFire.logout();
    } catch (error) {

    }
  }
}
