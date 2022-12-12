import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivoDePerrosComponent } from './components/archivo-de-perros/archivo-de-perros.component';
import { RegistrarPerrosComponent } from './components/registrar-perros/registrar-perros.component';
import { ReportesDePerrosComponent } from './components/reportes-de-perros/reportes-de-perros.component';
import { SolicitudesAdopcionComponent } from './components/solicitudes-adopcion/solicitudes-adopcion.component';
import { SolicitudesDePerrerasComponent } from './components/solicitudes-de-perreras/solicitudes-de-perreras.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginGuard } from './guards/login.guard';
import { AcercadeComponent } from './screens/acercade/acercade.component';
import { CambiarContrasenaComponent } from './screens/cambiar-contrasena/cambiar-contrasena.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MenuComponent } from './screens/menu/menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acerca-de', component: AcercadeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cambiar-contrasena', component: CambiarContrasenaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'menu', component: MenuComponent, canActivate: [LoginGuard], children:[
    {path: 'solicitudes-adopcion', component: SolicitudesAdopcionComponent},
    {path: 'registrar-perros', component: RegistrarPerrosComponent},
    {path: 'solicitudes-de-perreras', component: SolicitudesDePerrerasComponent},
    {path: 'reportes-de-perros', component: ReportesDePerrosComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'archivo-de-perros', component: ArchivoDePerrosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
