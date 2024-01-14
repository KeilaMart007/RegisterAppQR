import { Component, OnInit } from '@angular/core';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';

@Component({
  selector: 'app-perfilprofesor',
  templateUrl: './perfilprofesor.page.html',
  styleUrls: ['./perfilprofesor.page.scss'],
})
export class PerfilprofesorPage implements OnInit {

  constructor(private authFire: AuthfirebaseService) { }

  ngOnInit() {
  }
  
  async logout() {
    try {
      await this.authFire.logout();
    } catch (error) {

    }
  }

}
