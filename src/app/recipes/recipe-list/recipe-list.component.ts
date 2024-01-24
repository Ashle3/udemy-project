import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://mylifeandkids.com/wp-content/uploads/2013/12/Simple-Appetizer-Recipes.png')
  ];
}
