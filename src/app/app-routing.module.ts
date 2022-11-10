import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './screens/acercade/acercade.component';
import { CambiarContrasenaComponent } from './screens/cambiar-contrasena/cambiar-contrasena.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acerca-de', component: AcercadeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cambiar-contrasena', component: CambiarContrasenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
