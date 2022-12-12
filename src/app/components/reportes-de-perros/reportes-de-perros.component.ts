import { Component, OnInit } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes-de-perros',
  templateUrl: './reportes-de-perros.component.html',
  styleUrls: ['./reportes-de-perros.component.css']
})
export class ReportesDePerrosComponent implements OnInit {


  id = localStorage.getItem('id')
  reportes: any;
  
  constructor(
    private perrosService: PerrosService
  ) { }

  ngOnInit(): void {
    this.perrosService.getRepors().subscribe(res => {
      if (res.intResponse === 200) {
        this.reportes = res.Result
        this.reportes = this.reportes.reportes
      } else {
        Swal.fire('Error', 'No fue posible cargar reportes', 'error');

      }
    });
  }

  atender(id: any){
    this.perrosService.atenderReport(id, this.id).subscribe(res => {
      
      if (res.intResponse === 200) {
        Swal.fire('Success', 'Atendiendo reporte', 'success');
        
      } else {
        
      }
    });
    
  }
  eliminar(id: any){
    this.perrosService.eliminarReport(id).subscribe(res => {
      
      if (res.intResponse === 200) {
        Swal.fire('Success', 'Atendiendo reporte', 'success');
        
      } else {
        
      }
    });
  }
}
