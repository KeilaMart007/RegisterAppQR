import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Clases', url: '/clasesalumno', icon: 'reader-outline' },
    { title: 'Horario', url: '/folder/outbox', icon: 'calendar-outline' },
    { title: 'LectorQR', url: '/folder/favorites', icon: 'qr-code-outline' },
    { title: 'Login', url: '/folder/archived', icon: 'person-outline' },
    { title: 'Perfil', url: '/folder/archived', icon: 'person-circle-outline' },
  ];
  constructor() {}
}
