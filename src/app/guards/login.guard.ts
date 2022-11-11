import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, LocalStorageKeys } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService  
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  | boolean | UrlTree {
    return this.tryAutoLogin();
  }
  
  private async tryAutoLogin(){
    const token = localStorage.getItem(LocalStorageKeys.token)
    if(token){
      const res = await this.authService.loginAdminWithToken(token).toPromise();
      if(res){
        if(res.intResponse === 200){
          this.authService.setUserAdminSessionStorage(res.Result.admin);
          //this.authService.setTokenLocalStorage(res.Result.token);
          return true;
        }else{
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
          return false;
        }
      }else{
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/login']);
        return false;
      }
      
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}