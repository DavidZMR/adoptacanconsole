import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private usuarioService: UsuariosService
  ) { }

  nombre: string;
  correo: string;
  direccion: string;
  telefono: string;
  password: string;
  password2: string;

  ngOnInit(): void {
  }

  registrar(){
    let data = {
      'strNombres': this.nombre,
      'strCorreo': this.correo,
      'strDireccion': this.direccion,
      'strTelefono': this.telefono,
      'strPassword': this.password,
      'strtipoUsuario': 'perrera',
      'strStatus': 'pendiente'
    }
    this.usuarioService.registerPerrera(data).subscribe((res)=>{
      if(res.intResponse === 200){
        Swal.fire('Succes', 'fue posible registrar perrera', 'success');
      }else{
        Swal.fire('Error', 'No fue posible registrar perrera', 'error');
      }
    })
  }
}
