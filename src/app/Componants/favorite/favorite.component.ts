import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { RecipesList } from 'src/app/model/recipes-list';
import { FirestoreDBService } from '../services/firestore-db.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favList!:RecipesList[];

  constructor(private recipeService:RecipesService, private firestoreDB:FirestoreDBService) { }

  // pagination values
  page = 1;
  count = 0;
  pageSize = 9;
  pageSizes = [3, 6, 9];
  searchTerm: string= "";


  ngOnInit(): void {

    //Recive searchTerm
    this.recipeService.searchTerm.subscribe(term =>{
      this.searchTerm= term;
    })
    this.searchTerm ="";

    // get data from localstorge
    this.favList =this.recipeService.getAllFromLocalStorge(); 
    console.log("liked list",this.recipeService.getAllFromLocalStorge());

    //get data from firestore DB
    this.firestoreDB.getFavRecipes().subscribe((recipes: RecipesList[]) => {
      console.log("firestore",recipes);

      //to show data from firestore DB PLEASE uncomment the below line
      // this.favList = recipes;
    })
    
  }

}
