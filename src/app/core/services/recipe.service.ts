import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Recipe } from '../../shared/models/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes`);
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
}
