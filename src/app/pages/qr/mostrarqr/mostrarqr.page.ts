import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mostrarqr',
  templateUrl: './mostrarqr.page.html',
  styleUrls: ['./mostrarqr.page.scss'],
})
export class MostrarqrPage implements OnInit {

  constructor(private router: Router, private auth: AngularFireAuth, private navCtrl: NavController, private loadingCtrl: LoadingController) { }
  private loading:any;

  ngOnInit() {
  }

  async xd(){
    this.loadingCtrl.create({
      message: 'Guardando'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    })

    setTimeout(() => {

      this.loading.dismiss();
      this.navCtrl.navigateRoot('clasesprofesor');

    }, 500);
  }

}
