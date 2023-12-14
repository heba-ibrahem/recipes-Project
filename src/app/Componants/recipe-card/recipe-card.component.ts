import { Component, Input, OnInit } from '@angular/core';
import { RecipesList } from 'src/app/model/recipes-list';
import { RecipesService } from '../services/recipes.service';
import { FirestoreDBService } from '../services/firestore-db.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe!: RecipesList ;
  isFavorit: boolean= false;
  // favoritRecipe :RecipesList[]=[];
  favList!:RecipesList[];
  storagelist!:RecipesList[];
  
  constructor(private recipeService:RecipesService, private firestoreDB:FirestoreDBService) {
    
   }

  ngOnInit(): void {
    
    let storageItems = localStorage.getItem('favoritRecipe')
    if(storageItems){
       this.storagelist = JSON.parse(storageItems)
      this.storagelist.forEach(favRecipe =>{
        if(favRecipe.id == this.recipe.id){
          // console.log("found")
          this.isFavorit = true
        }
        // else{
        //   console.log(" not found")
        // } 
      }
      )
    }
  }
  addToFavorites(item: RecipesList){
    this.isFavorit= true;
    let fav =  this.isFavorit 
    //save to localstorg
    this.recipeService.addFav({...item,isFavorit:fav})
    //save to fireStore DB
    this.firestoreDB.addFavRecipe(item)
    console.log("liked");
  }
  removefromFavorites(recipe: RecipesList){
    this.recipeService.removeFav(recipe.id)
    this.favList =this.recipeService.getAllFromLocalStorge()
    this.isFavorit= false;
    window.location.reload();
    console.log("unliked")
  }

}
