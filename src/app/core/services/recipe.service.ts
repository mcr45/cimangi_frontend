import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Recipe } from '../../shared/models/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipes(page:number) {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes?page=${page}`);
  }

  getRecipe(id: number) {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${id}`);
  }

  createRecipe(recipe: Recipe) {
    return this.http.post(`${environment.apiUrl}/recipes`, recipe);
  }
  updateRecipe(id:number,recipe:Recipe){
    return this.http.put<Recipe>(`${environment.apiUrl}/recipes/${id}`,recipe)
  }
  deleteRecipe(id:number){
    return this.http.delete(`${environment.apiUrl}/recipes/${id}`);
  }
  my_most_viewed(){
    return this.http.get<Recipe>(`${environment.apiUrl}/topviewsr`);
  }
}
