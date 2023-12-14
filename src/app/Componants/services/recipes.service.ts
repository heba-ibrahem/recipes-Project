import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { RecipesList } from 'src/app/model/recipes-list';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  httpOptions={
   headers :new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key' :'67bfc3d975f54329a69f5ea3c864e6b1'})
  }
  favoritRecipes :RecipesList[]=[];

  searchTerm= new BehaviorSubject<string>('')

  constructor(private http:HttpClient) {
    // get stored recipes
    const favoritRecipes = localStorage.getItem('favoritRecipe')
    if(favoritRecipes){
      this.favoritRecipes = JSON.parse(favoritRecipes)
    }
  }

  // Api
  getRecipes():Observable<any[]> {
    const url='https://api.spoonacular.com/recipes/random?number=100';
    return this.http.get<RecipesList[]>(url,{headers: this.httpOptions.headers}).pipe(
      map((data:any) => data.recipes));
  }
  getRecipe(id:number): Observable <RecipesList>{
    const url='https://api.spoonacular.com/recipes/';
    return this.http.get<RecipesList>(url+id+'/information',{headers: this.httpOptions.headers});
  }
 
  // Local storge
  addFav(recipe:RecipesList){
    this.favoritRecipes.push(recipe)
    localStorage.setItem('favoritRecipe', JSON.stringify(this.favoritRecipes))
  }
 
  removeFav(recipeId:number){
    this.favoritRecipes = this.favoritRecipes.filter((recipe) => recipe.id != recipeId);
    localStorage.setItem('favoritRecipe', JSON.stringify(this.favoritRecipes))
  }
  getAllFromLocalStorge(): RecipesList[] {
    return this.favoritRecipes;
  }
  
}
