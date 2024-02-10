import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test', 'This is a test', 'https://mylifeandkids.com/wp-content/uploads/2013/12/Simple-Appetizer-Recipes.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}