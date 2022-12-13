import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-info',
  templateUrl: './cambiar-info.component.html',
  styleUrls: ['./cambiar-info.component.css']
})
export class CambiarInfoComponent implements OnInit {

  id = localStorage.getItem('id')
  usuario: any;
  nombre: string;
  direccion: string;
  correo: string;
  telefono: string;
  constructor(
    private userService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.userService.getDatos(this.id).subscribe((res)=>{
      if(res.intResponse === 200){
        this.usuario = res.Result
        this.usuario = this.usuario.usuario[0]
        console.log(this.usuario)
        this.nombre = this.usuario.nombres
        console.log(this.nombre)
        this.direccion = this.usuario.direccion
        this.correo = this.usuario.correo
        this.telefono = this.usuario.telefono
      }else{
        Swal.fire('Error', 'Datos no encontrados', 'error');

      }
    })
  }

  cambiar(){
    let data = {
      'intId': this.id,
      'strNombres': this.nombre,
      'strDireccion': this.direccion,
      'strCorreo': this.correo,
      'strTelefono': this.telefono
    }
    this.userService.changeDatos(data).subscribe((res)=>{
      if(res.intResponse === 200){
        Swal.fire('Success', 'fue posible cambiar datos', 'success');
      }else{
        Swal.fire('Error', 'No fue posible cambiar datos', 'error');

      }
    })

  }
}
