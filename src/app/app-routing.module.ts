import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { FavoriteComponent } from './Componants/favorite/favorite.component';
import { RecipeDetailsComponent } from './Componants/recipe-details/recipe-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'search/:listfilter', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'recipeDetails/:id/information', component: RecipeDetailsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
