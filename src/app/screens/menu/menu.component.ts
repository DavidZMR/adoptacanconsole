import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SideNavContent } from './sideNavContent';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUrl = '';
  routes = SideNavContent;
  titulo: string;

  constructor(
    private router: Router  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.currentUrl = res.urlAfterRedirects;
      }
    });
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    //alert(localStorage.getItem('token')+ ' sesion cerrada');
    this.router.navigate(['/home'],{replaceUrl: true});
  }

  close(){
    sessionStorage.clear()
    localStorage.clear()
    this.router.navigate(['/home'],{replaceUrl: true});
  }
}
