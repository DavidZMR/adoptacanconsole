import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AcercadeComponent } from './screens/acercade/acercade.component';
import { LoginComponent } from './screens/login/login.component';
import { CambiarContrasenaComponent } from './screens/cambiar-contrasena/cambiar-contrasena.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SolicitudesAdopcionComponent } from './components/solicitudes-adopcion/solicitudes-adopcion.component';
import { MenuComponent } from './screens/menu/menu.component';
import { RegistrarPerrosComponent } from './components/registrar-perros/registrar-perros.component';
import { SolicitudesDePerrerasComponent } from './components/solicitudes-de-perreras/solicitudes-de-perreras.component';
import { ReportesDePerrosComponent } from './components/reportes-de-perros/reportes-de-perros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ArchivoDePerrosComponent } from './components/archivo-de-perros/archivo-de-perros.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AcercadeComponent,
    LoginComponent,
    CambiarContrasenaComponent,
    SolicitudesAdopcionComponent,
    MenuComponent,
    RegistrarPerrosComponent,
    SolicitudesDePerrerasComponent,
    ReportesDePerrosComponent,
    UsuariosComponent,
    ArchivoDePerrosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule, 
    ModalModule.forRoot()
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
