import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  logout($event: any) {
    event?.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login'])
  }
}
