import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminModel } from '../models/admin';
import { Response } from '../models/Response';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  body: {}
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  get admin(): AdminModel | null {
    const adminString = sessionStorage.getItem(SessionStorageKeys.user)
    if (adminString) {
      return JSON.parse(adminString) as AdminModel
    } else {
      return null;
    }
  }


  loginAdmin(strEmail: string, strPassword: string) {
    const data = {strEmail, strPassword};
    return this.http.post<Response<{
      token: string,
      admin: AdminModel
    }>>(`${environment.apisUrl}/admin/loginAdmin`, data);
  }

  loginAdminWithToken(strToken: string){
    const data = {strToken};
    return this.http.post<Response<{
      token: string,
      admin: AdminModel
    }>>(`${environment.apisUrl}/admin/loginTokenAdmin`,data);
  }
  
  setUserAdminSessionStorage(admin: AdminModel) {
    const data = JSON.stringify(admin);
    sessionStorage.setItem(SessionStorageKeys.user, data);
  }
  

}

export enum LocalStorageKeys {
  token = 'token',
}

export enum SessionStorageKeys {
  user = 'admin',
}