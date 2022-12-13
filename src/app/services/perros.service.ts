import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "../models/Response";
import { environment } from 'src/environments/environment';
import { ReportsModel } from '../models/Reports';
import { PerrosModel } from '../models/PerrosModel';
import { SolicitudesModel } from '../models/SolicitudesModel';
import { UsuariosModel } from '../models/UsuariosModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  body: {}
};
@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  constructor(
    private http: HttpClient
  ) { }

  report(data: any){
    return this.http.post<Response<any>>(`${environment.apisUrl}/perros/report`,data);
  }
  getRepors(){
    return this.http.get<Response<ReportsModel[]>>(`${environment.apisUrl}/perros/getReports`);
  }
  atenderReport(idReporte: number, idUsuario: any){
    return this.http.get<Response<any>>(`${environment.apisUrl}/perros/atenderReport/`+idReporte+'&'+idUsuario);
  }
  eliminarReport(idReporte: number){
    let data = {'idReporte': idReporte}
    return this.http.put<Response<any>>(`${environment.apisUrl}/perros/eliminarReport`, data);
  }
  
  getReportInCurso(id: any){
    return this.http.get<Response<ReportsModel>>(`${environment.apisUrl}/perros/getReportInCurso/`+id);
  }
  changeStatus(data: any){
    return this.http.post<Response<any>>(`${environment.apisUrl}/perros/changeReportStatus`,data)
  }
  addPerro(data: any){
    return this.http.post<Response<any>>(`${environment.apisUrl}/perros/register`,data)
  }
  getArchivoPerros(){
    return this.http.get<Response<PerrosModel[]>>(`${environment.apisUrl}/perros/getArchivoPerros`);
  }
  getSolicitudesAdopcion(){
    return this.http.get<Response<SolicitudesModel[]>>(`${environment.apisUrl}/perros/getSolicitudesAdopcion`);
  }
  
  setCita(data: any){
    return this.http.post<Response<any>>(`${environment.apisUrl}/perros/setCita`,data);
  }
}
