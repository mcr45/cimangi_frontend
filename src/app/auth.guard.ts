import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authS=inject(AuthenticationService)
  const router=inject(Router)
  if(authS.isLoggedIn()){
    return true
  }
  else{
    router.navigate(['login'])
    return false
  }
};
