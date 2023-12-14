import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RecipesList } from 'src/app/model/recipes-list';


@Injectable({
  providedIn: 'root'
})
export class FirestoreDBService {

  // recipesCollection: AngularFirestoreCollection<RecipesList>

  constructor(private firestore: AngularFirestore) {
    // this.recipesCollection = this.firestore.collection('Recipes')
   }

  addFavRecipe(recipe: RecipesList) {
    return this.firestore.collection('Recipes').add(recipe);
  }
  getFavRecipes(): Observable<RecipesList[]> {
    return this.firestore.collection<RecipesList>('Recipes').valueChanges();
  }
 
}
