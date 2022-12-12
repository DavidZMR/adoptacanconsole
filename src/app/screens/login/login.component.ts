import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  email: string = '';
  password: string = '';
  
  ngOnInit(): void {
  }


  submit() {
    this.authService.loginAdmin(this.email, this.password).subscribe(res => {
      if (res.intResponse === 200) {
        this.authService.setUserAdminSessionStorage(res.Result.admin);
        localStorage.setItem('id', res.Result.admin.id.toString())
        //this.authService.setTokenLocalStorage(res.Result.token)
        this.router.navigate(['/menu'], {replaceUrl: true});
        //alert(JSON.stringify(this.authService.user,null,2))
      } else {
        Swal.fire('Error', 'No fue posible encontrar una cuenta activa', 'error');
      }
    });
  }
}
