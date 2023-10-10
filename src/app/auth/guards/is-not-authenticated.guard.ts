import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { authStatus } from '../interfaces/auth-status.enum';
import { inject } from '@angular/core';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const authService = inject( AuthService );
  const router = inject( Router );

  if( authService.authStatus() === authStatus.authenticated ) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
