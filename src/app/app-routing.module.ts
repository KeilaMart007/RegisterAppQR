import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/auth/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/auth/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'homealumno',
    loadChildren: () => import('./pages/home/homealumno/homealumno.module').then( m => m.HomealumnoPageModule)
  },
  {
    path: 'homeprofesor',
    loadChildren: () => import('./pages/home/homeprofesor/homeprofesor.module').then( m => m.HomeprofesorPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./pages/perfil/perfilalumno/perfilalumno.module').then( m => m.PerfilalumnoPageModule)
  },
  {
    path: 'perfilprofesor',
    loadChildren: () => import('./pages/perfil/perfilprofesor/perfilprofesor.module').then( m => m.PerfilprofesorPageModule)
  },
  {
    path: 'leerqr',
    loadChildren: () => import('./pages/qr/leerqr/leerqr.module').then( m => m.LeerqrPageModule)
  },
  {
    path: 'mostrarqr',
    loadChildren: () => import('./pages/qr/mostrarqr/mostrarqr.module').then( m => m.MostrarqrPageModule)
  },
  {
    path: 'listaprofesor',
    loadChildren: () => import('./pages/lista/listaprofesor/listaprofesor.module').then( m => m.ListaprofesorPageModule)
  },
  {
    path: 'listalumno',
    loadChildren: () => import('./pages/lista/listalumno/listalumno.module').then( m => m.ListalumnoPageModule)
  },
  {
    path: 'clasesprofesor',
    loadChildren: () => import('./pages/clases/clasesprofesor/clasesprofesor.module').then( m => m.ClasesprofesorPageModule)
  },
  {
    path: 'clasesalumno',
    loadChildren: () => import('./pages/clases/clasesalumno/clasesalumno.module').then( m => m.ClasesalumnoPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/clases/horario/horario.module').then( m => m.HorarioPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
