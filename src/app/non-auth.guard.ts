import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const authS=inject(AuthenticationService)
  const router=inject(Router)

  if(authS.isLoggedIn()){
    router.navigate(['/home'])
    return false
  }
  else{
    return true
  }
};
