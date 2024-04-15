import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Post } from '../../shared/models/post';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postListChanged:Subject<Post[]>=new Subject()
  constructor(private http: HttpClient) {}
  posts!:Post[]

  getPosts(page:number): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts?page=${page}`);
  }
  createPost(post: Post) {
    return this.http.post(`${environment.apiUrl}/posts`, post);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }
  getBestPost() {
    return this.http.get<Post>(`${environment.apiUrl}/bestpost`);
  }
  updatePost(post:Post){
    return this.http.put(`${environment.apiUrl}/posts/${post.id}`, post);
  }
  deletePost(id:number){
    return this.http.delete(`${environment.apiUrl}/posts/${id}`);
  }
  my_most_viewed(){
    return this.http.get<Post>(`${environment.apiUrl}/topviewsp`);
  }
  changeList(posts:Post[]){
   this.postListChanged.next(posts)
  }

  likePost(id:number){
   return this.http.get<Post>(`${environment.apiUrl}/likes/${id}`)
  }


}
