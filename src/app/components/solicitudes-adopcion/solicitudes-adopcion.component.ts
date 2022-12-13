import { Component, OnInit, TemplateRef } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitudes-adopcion',
  templateUrl: './solicitudes-adopcion.component.html',
  styleUrls: ['./solicitudes-adopcion.component.css']
})
export class SolicitudesAdopcionComponent implements OnInit {


  idLog = localStorage.getItem('id')
  solicitudes: any;
  
  usuarios: any;
  usuario: any;
  modalRef: BsModalRef;

  idAux: any;
  idAuxUsuario: any;
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
    private perrosServece: PerrosService,
    private userService: UsuariosService,
    private modalService: BsModalService,

  ) { }

  ngOnInit(): void {
    this.perrosServece.getSolicitudesAdopcion().subscribe((res)=>{
      if(res.intResponse === 200){
        this.solicitudes = res.Result
        this.solicitudes = this.solicitudes.solicitudes
        console.log(this.solicitudes)
      }else{

      }
    })
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
  setIdModal(id: any, idUsuario: any){
    this.idAux = id
    
  }
  setCita(){

  }

}
