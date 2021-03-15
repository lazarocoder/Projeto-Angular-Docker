import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [

      { label: 'Pessoas', icon: 'pi pi-fw pi-plus', routerLink: '/principal/pessoas' }

    ];
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login'])
  }
}
