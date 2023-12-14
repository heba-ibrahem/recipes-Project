import { Component, OnInit, Input,  } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipesList } from 'src/app/model/recipes-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm: string= "";
  recipesList!:RecipesList[];
  isFavorit: boolean= false;

// pagination values
  page = 1;
  count = 0;
  pageSize = 9;
  pageSizes = [3, 6, 9];

  constructor(private recipesServise:RecipesService) {}

  ngOnInit(): void {
    this.getAllRecipes();
    this.recipesServise.searchTerm.subscribe(term =>{
      this.searchTerm= term
    })
    this.searchTerm ="";
  }
  
  getAllRecipes(){
    this.recipesServise.getRecipes().subscribe((data:any) =>{
        this.recipesList= data;
        console.log('recipe list',this.recipesList);
        
      }
    )
   
  }

}
