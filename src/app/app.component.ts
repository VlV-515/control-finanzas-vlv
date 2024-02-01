import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialCustomModule } from './shared/material.module';
import { LoginService } from './shared/services/login.service';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MaterialCustomModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public loginSvc = inject(LoginService);
  public arrUrlSidenav = [
    { title: 'HOME', icon: 'home', url: 'app/home' },
    { title: 'CONFIGURACIÓN', icon: 'settings', url: 'app/configuracion' },
  ];
}
