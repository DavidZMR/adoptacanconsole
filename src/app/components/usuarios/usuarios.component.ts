import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any;
  usuario: any;
  modalRef: BsModalRef;
  nombres: string;
  apellidos: string;
  edad: number;
  direccion: string;
  correo: string;
  foto: string;
  tipo: string;
  id: number;
  status: string;
  constructor(
    private userService: UsuariosService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.userService.getUsuarios().subscribe((res) => {
      if(res.intResponse === 200){
        this.usuarios = res.Result
        this.usuarios = this.usuarios.usuarios
      }else{
        Swal.fire('Error', 'No fue posible cargar usuarios', 'error');

      }
    });
  }
  
  openModal( id: any, template: TemplateRef<any>){
    this.userService.getDetalles(id).subscribe((res)=>{
      if(res.intResponse === 200){
        
        this.usuario = res.Result
        this.usuario = this.usuario.usuario[0]
        this.nombres = this.usuario.nombres
        this.apellidos = this.usuario.apellidos
        this.edad  = this.usuario.edad
        this.direccion = this.usuario.direccion
        this.correo  = this.usuario.correo
        this.foto  = this.usuario.foto
        this.tipo  = this.usuario.tipo
        this.id  = this.usuario.id
        this.status  = this.usuario.status
        this.modalRef = this.modalService.show(template)
      }else{
        Swal.fire('Error', 'No fue posible cargar detalles', 'error');

      }
    });
    
  }

  aprobar(id: any){
    let data = {
      'intId': id,
      'strStatus': 'aprobado'
    }
    this.userService.changeStatus(data).subscribe((res)=>{
      if(res.intResponse === 200){
        Swal.fire('Success', 'Usuario aprobado', 'success');
      }else{
        Swal.fire('Error', 'Error al hacer cambio', 'error');

      }
    });
  }
  rechazar(id: any){
    let data = {
      'intId': id,
      'strStatus': 'rechazado'
    }
    this.userService.changeStatus(data).subscribe((res)=>{
      if(res.intResponse === 200){
        Swal.fire('Success', 'Usuario rechazado', 'success');
      }else{
        Swal.fire('Error', 'Error al hacer cambio', 'error');

      }
    });
  }
  eliminar(id:any){
    let data = {
      'intId': id,
      'strStatus': 'eliminado'
    }
    this.userService.changeStatus(data).subscribe((res)=>{
      if(res.intResponse === 200){
        Swal.fire('Success', 'Usuario eliminado', 'success');
      }else{
        Swal.fire('Error', 'Error al hacer cambio', 'error');

      }
    });
  }

}
