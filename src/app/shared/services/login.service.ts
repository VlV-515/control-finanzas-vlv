import { Injectable, signal, inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userGlobal = signal<User | null>(null);
  private authSvc = inject(AuthService);

  login(): void {
    this.authSvc.loginWithRedirect();
  }

  logout(): void {
    this.userGlobal.set(null);
    this.authSvc.logout();
  }

  getFullUser(): User | null {
    return this.userGlobal();
  }

  setUser(user: User): void {
    this.userGlobal.set(user);
  }
}
