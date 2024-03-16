import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
environment
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  addComment(type:string,id:number,text:string){
    return this.http.post(`${environment.apiUrl}/${type}/${id}/comments`,{body:text})
  }

}
