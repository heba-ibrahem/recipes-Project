import { Pipe, PipeTransform } from '@angular/core';
import { RecipesList } from '../model/recipes-list';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: RecipesList[], searchTerm: string): any {
    if(searchTerm){
      console.log(searchTerm)
      return value.filter((filterRecipes: RecipesList) =>
      filterRecipes.title.toLowerCase().includes(searchTerm));
    }
    return value;
  }

}
