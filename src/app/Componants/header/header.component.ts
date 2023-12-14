import { Component, OnInit } from '@angular/core';
import { RecipesList } from 'src/app/model/recipes-list';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchTerm!: string;
  recipesList: RecipesList[]=[];
  path: string='';

  constructor(private recipesServise:RecipesService, private router:Router, private location: Location) {
      // to hide search bar on recipe details page 
      this.router.events.subscribe((val) => {
        this.path = this.location.path();
        // console.log("header",this.path)
      });   
   }

  ngOnInit(): void {
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.recipesServise.getRecipes().subscribe((data:any) =>{
        this.recipesList= data;
        // console.log('recipe list',this.recipesList);
      }
    )
  }
  
     //  Search Funtion 
    filter(searchTerm: string):void {
      if(searchTerm){
     this.recipesServise.searchTerm.next(this.searchTerm)
      this.recipesList= this.recipesList.filter((filterRecipes: RecipesList) =>
      filterRecipes.title.toLowerCase().includes(searchTerm)
      );}
      else{
         this.getAllRecipes()
      }
    }
}
