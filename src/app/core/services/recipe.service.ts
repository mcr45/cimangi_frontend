import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Recipe } from '../../shared/models/recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

getRecipes(){

 return this.http.get<Recipe>(`${environment.apiUrl}/recipes`)
}



getRecipe(id:number){
  return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${id}`)
 }



}
