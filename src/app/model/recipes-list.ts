export interface RecipesList {
    id: number,
    isFavorit: boolean,
    aggregateLikes: number,
    title: string,
    image: string,
    readyInMinutes: number,
    summary: string,
    pricePerServing: number,
    extendedIngredients: [{
        nameClean: string;
    }],
    analyzedInstructions: [{
        name: string;
        steps: [{
            number: number;
            step: string;

        }]
    }],

}
