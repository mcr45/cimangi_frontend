import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient, private route: Router) {}

  logIn(username: string, password: string) {
    return this.http.post<{ token: string }>(`${environment.logInUrl}`, {
      username,
      password,
    });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.route.navigate(['/login']);
  }

  signup(user: any) {
    return this.http.post(`${environment.apiUrl}` + '/users', user);
  }
}
