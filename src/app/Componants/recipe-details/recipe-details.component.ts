import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesList } from 'src/app/model/recipes-list';
import { RecipesService } from '../services/recipes.service';
import { FirestoreDBService } from '../services/firestore-db.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipeData!: RecipesList | any;
  isFavorit!: boolean;
  // favoritRecipe :RecipesList[]=[];
  // recipe!: RecipesList ;
  storagelist :RecipesList[]=[];
  constructor(private route: ActivatedRoute, private recipeService:RecipesService, private firestoreDB:FirestoreDBService) { 
  }

  ngOnInit(): void {

    const id =this.route.snapshot.params['id']
    //get Favorite state
    let storageItems = localStorage.getItem('favoritRecipe')
    if(storageItems){
      this.storagelist = JSON.parse(storageItems)
      this.storagelist.forEach(favRecipe =>{
        if(favRecipe.id == id){
          // console.log("found")
          this.isFavorit = true
        }
        // else{
        //   console.log(" not found")
        // } 
      }
      )
    }
    
    this.recipeService.getRecipe(id).subscribe((item)=>{
      this.recipeData= item
      // console.log('idr',item.extendedIngredients)
      // console.log("test",this.recipeData.id)
    })
  }

  addToFavorites(item: RecipesList){
    this.isFavorit= true;
    let fav =  this.isFavorit;
      //save to localstorg
      this.recipeService.addFav({...item,isFavorit:fav})
      //save to fireStore DB
      this.firestoreDB.addFavRecipe(item)
    console.log("liked");
  }
  removefromFavorites(id:number){
    this.isFavorit= false;
    this.recipeService.removeFav(id)
    console.log("unliked")
  }
}
