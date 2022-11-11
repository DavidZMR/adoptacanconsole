import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesAdopcionComponent } from './components/solicitudes-adopcion/solicitudes-adopcion.component';
import { LoginGuard } from './guards/login.guard';
import { AcercadeComponent } from './screens/acercade/acercade.component';
import { CambiarContrasenaComponent } from './screens/cambiar-contrasena/cambiar-contrasena.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MenuComponent } from './screens/menu/menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acerca-de', component: AcercadeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cambiar-contrasena', component: CambiarContrasenaComponent},
  {path: 'menu', component: MenuComponent, canActivate: [LoginGuard], children:[
    {path: 'solicitudes-adopcion', component: SolicitudesAdopcionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
