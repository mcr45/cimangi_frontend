import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
import { inject } from '@angular/core';
import { UserService } from './core/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authS=inject(AuthenticationService)
  const us=inject(UserService)
  const router=inject(Router)
  if(authS.isLoggedIn()){
    us.loadUser()

    return true
  }
  else{
    router.navigate(['login'])
    return false
  }
};
