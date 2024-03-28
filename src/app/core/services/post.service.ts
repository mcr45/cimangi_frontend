import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Post } from '../../shared/models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
  createPost(post: Post) {
    return this.http.post(`${environment.apiUrl}/posts`, post);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }
}
