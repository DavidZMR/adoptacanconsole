import { Component, OnInit } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivo-de-perros',
  templateUrl: './archivo-de-perros.component.html',
  styleUrls: ['./archivo-de-perros.component.css']
})
export class ArchivoDePerrosComponent implements OnInit {

  
  perros: any;
  constructor(
    private perrosService: PerrosService
  ) { }


  // width: 79.59%;
  //   height: 0vmax;
  //   left: 20.35vmax;
  

  ngOnInit(): void {
   this.perrosService.getArchivoPerros().subscribe((res) => {
    if(res.intResponse === 200){
      this.perros = res.Result
      this.perros = this.perros.perros
    }else{
      Swal.fire('Error', 'No fue posible cargar perros', 'error');

    }
   });
  }

}
