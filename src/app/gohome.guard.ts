import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';

export const gohomeGuard: CanActivateFn = (route, state) => {
  const as=inject(AuthenticationService)
  const router=inject(Router)
  if(as.isLoggedIn()){
    router.navigate(['/settings'])
    return true
  }
  else{
    router.navigate(['login'])
    return false
  }

};
