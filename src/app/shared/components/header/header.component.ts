import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { User } from '@auth0/auth0-angular';
import { MaterialCustomModule } from '../../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialCustomModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() btnMenu = new EventEmitter<boolean>();
  loginSvc = inject(LoginService);

  get user(): User | null | undefined {
    return this.loginSvc.getFullUser();
  }
}
