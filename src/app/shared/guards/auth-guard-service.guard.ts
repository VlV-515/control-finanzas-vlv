import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { of, switchMap } from 'rxjs';
import { LoginService } from '../services/login.service';

export const AuthGuardService: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authSvc = inject(AuthService);
  const loginService = inject(LoginService);
  const router = inject(Router);

  return authSvc.isAuthenticated$.pipe(
    switchMap((isAuthenticated) => {
      if (!isAuthenticated) return of(null);
      return authSvc.user$;
    }),
    switchMap((user: User | null | undefined) => {
      const url = route.url.join('');
      if (!user) {
        if (url === 'welcome') {
          return of(true);
        }
        router.navigate(['/welcome']);
        return of(false);
      }

      loginService.setUser(user);
      if (url === 'welcome') {
        router.navigate(['/app']);
        return of(false);
      }
      return of(true);
    })
  );
};
