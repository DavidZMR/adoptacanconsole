import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerrosService } from 'src/app/services/perros.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-perros',
  templateUrl: './registrar-perros.component.html',
  styleUrls: ['./registrar-perros.component.css']
})
export class RegistrarPerrosComponent implements OnInit {

  constructor(
    private perrosService:PerrosService,
    private router: Router,
    private userService: UsuariosService
  ) { }
  id = localStorage.getItem('id')
  perreras: any
  foto: any;
  nombre: string;
  color: string;
  talla: string;
  tam: number;
  perrera: number;
  descripcion: number;
  ngOnInit(): void {
    this.userService.getListaPerrera().subscribe((res)=>{
      if(res.intResponse === 200){
        this.perreras = res.Result
        this.perreras = this.perreras.perreras
        console.log(this.perreras)
      }else{
        Swal.fire('Error', 'No fue posible cargar perreras', 'error');

      }
    })
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.foto = reader.result
    };
  }

  agregar(){
    let idUsuario = this.id
    let data = {
      'strFoto': this.foto, 
      'strNombre': this.nombre, 
      'strColor': this.color, 
      'strTalla': this.talla, 
      'intPerrera': this.perrera, 
      'strDescripcion': this.descripcion, 
      'intIdUsuario': idUsuario, 
      'intTam': this.tam,
      'strStatus': 'adopcion'
    }
    this.perrosService.addPerro(data).subscribe((res) =>{
      if(res.intResponse === 200){
        Swal.fire('success', 'Perro agregado correctamente', 'success');
        this.router.navigate(['/menu'])
      }else{
        Swal.fire('Error', 'No fue posible registrar perro', 'error');

      }
    });
  }

}
