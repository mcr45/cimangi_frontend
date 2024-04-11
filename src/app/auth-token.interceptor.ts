import { HttpInterceptorFn } from '@angular/common/http';
import { AuthenticationService } from './core/services/authentication.service';
import { inject } from '@angular/core';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authS=inject(AuthenticationService)
  const token=authS.getToken()

  const authReq=token ? req.clone({headers:req.headers.set('Authorization',`Bearer ${token}`)}) : req

  return next(authReq)
};
