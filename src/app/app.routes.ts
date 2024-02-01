import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth-guard-service.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.component').then((m) => m.WelcomeComponent),
    canActivate: [AuthGuardService],
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuardService],
    /*  children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ], */
  },
];
