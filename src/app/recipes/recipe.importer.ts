import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeImporter {

    private recipeService: RecipeService;

    public constructor(recipeService: RecipeService) {
        this.recipeService = recipeService;
    }

    public getData() {
        const recipes: Recipe[] = [
            {
                name: 'Prosciutto and spinach tortellini',
                thumbnail: 'https://img.youtube.com/vi/mPLYdh3Ie3g/0.jpg',
                video: 'https://www.youtube.com/watch?v=mPLYdh3Ie3g',
                cuisine: 'italian',
                time: 20,
                ingredients: [{
                    name: 'All',
                    ingredients: [
                        {name: 'fresh cheese tortellini', amount: '1/2 package'},
                        {name: 'pine nuts', amount: '1/4 tbsp '},
                        {name: 'olive oil', amount: '1/2 tsp '},
                        {name: 'garlic, finely diced', amount: '1 clove'},
                        {name: 'fresh baby spinach, washed', amount: '100g'},
                        {name: 'grated Parmesan cheese', amount: '1/2 cup'},
                        {name: 'prosciutto, thinly sliced', amount: '15g'},
                        {name: 'black pepper', amount: '1 pinch'}
                    ]
                }
                ],
                method: [
                    'Cook pasta according to the package directions, omitting salt and fat; drain. Transfer pasta to a large bowl.',
                    // tslint:disable-next-line:max-line-length
                    'Heat a large frying pan over medium heat. Add nuts; cook until toasted (1 - 1/2 minutes), stir occasionally. Move nuts to bowl.',
                    // tslint:disable-next-line:max-line-length
                    'Heat oil in pan over medium heat. Add garlic to pan; cook 2 minutes, stirring occasionally. Add spinach to pan; cook 2 minutes or until spinach wilts. Add spinach mixture, cheese, and remaining ingredients to bowl; toss well.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Creamy polenta with mushroom ragout',
                thumbnail: 'https://img.youtube.com/vi/mPLYdh3Ie3g/0.jpg',
                video: 'https://www.youtube.com/watch?v=mPLYdh3Ie3g',
                cuisine: 'italian',
                time: 40,
                ingredients: [
                    {
                        name: 'ragout',
                        ingredients: [
                            {name: 'dried porcini mushrooms', amount: '1/2 cup'},
                            {name: 'butter', amount: '10g'},
                            {name: 'shallot finely chopped', amount: '1 item'},
                            {name: 'garlic, crushed', amount: '1 clove'},
                            {name: 'thyme leaves, leaves picked', amount: '1/3 tsp'},
                            {name: 'large field mushroom, sliced', amount: '125g'},
                            {name: 'chestnut mushroom, sliced', amount: '50g'},
                            {name: 'red wine', amount: '125ml'},
                            {name: 'Taleggio cheese, sliced', amount: '25g'},
                            {name: 'vegetable stock', amount: '50ml'},
                        ]
                    },
                    {
                        name: 'pollenta',
                        ingredients: [
                            {name: 'milk', amount: '125 ml'},
                            {name: 'grated Parmesan cheese', amount: '1/2 cup'},
                            {name: 'bay leaf', amount: '1 item'},
                            {name: 'thyme leaves', amount: '1/3 tsp'},
                            {name: 'instant polenta', amount: '75g'},
                            {name: 'butter', amount: '10g'},
                        ]
                    }
                ],
                method: [
                    'Soak the dried porcini in 50ml of warm water.  In 20 mins drain and reserve the soaking liquid. ',
                    // tslint:disable-next-line:max-line-length
                    'In large saucepan bring milk and 1250ml of water to boil, add bay leaf and thyme. Turn off the heat and leave to infuse for 20 mins',
                    // tslint:disable-next-line:max-line-length
                    'Heat frying pan over medium heat, add butter, shallot and cook until soft. Add garlic and thyme leaves, cook for 1 minute. Turn up the heat and add porcini, cook for 1 min and then add all the other mushrooms. Fry over a very high heat for 5 mins until soft. Splash in the red wine and boil rapidly for 1 min. Pour in the stock and reserved mushroom liquid,  simmer for 15 mins until the stew thickens',
                    // tslint:disable-next-line:max-line-length
                    'Fish out the herbs from infused milk and bring it to boil. Add the polenta in a slow stream while whisking steadily. Cook for 1 min until thickened, then stir in the butter and Parmesan. Make a well of polenta onto a baking tray and fill with the ragout. Top with slices of Taleggio, place under a hot grill until cheese starts melting.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Meatball spaghetti',
                thumbnail: 'https://img.youtube.com/vi/mPLYdh3Ie3g/0.jpg',
                video: 'https://www.youtube.com/watch?v=mPLYdh3Ie3g',
                cuisine: 'italian',
                time: 45,
                ingredients: [
                    {
                        name: 'Meatballs',
                        ingredients: [
                            {name: 'lean ground beef', amount: '500g'},
                            {name: 'white bread, soaked in warm wetter', amount: '2 slices'},
                            {name: 'egg, slightly beaten', amount: '1 item'},
                            {name: 'garlic, crashed', amount: '1 clove'},
                            {name: 'Italian seasoning', amount: '1/4 tsp'},
                            {name: 'Parsley chopped', amount: ''},
                            {name: 'grated Parmesan cheese', amount: '1/2 cup'},
                            {name: 'salt', amount: '1 tsp'},
                            {name: 'Salt and pepper', amount: '1 pinch'},
                            {name: 'olive or vegetable oil (for frying)', amount: '1 tbsp'},
                        ]
                    },
                    {
                        name: 'Souse',
                        ingredients: [
                            {name: 'white small onion, diced', amount: '1 item'},
                            {name: 'chopped plum tomatoes', amount: '1/2 can '},
                            {name: 'sugar', amount: '1 tsp'},
                            {name: 'garlic, crashed', amount: '1 clove'},
                            {name: 'olive oil', amount: '1 tbsp'},
                            {name: 'Salt and pepper', amount: '1 pinch'},
                        ]
                    },
                    {
                        name: 'Pasta',
                        ingredients: [
                            {name: 'fresh spaghetti', amount: '1 pack'},
                        ]
                    },
                ],
                method: [
                    // tslint:disable-next-line:max-line-length
                    'Preheat oven to 240C/fan 220C /gas 8. Meatballs: Mix all ingredients in a large bowl until evenly mixed. Roll 1,5 - 2 inches large meatballs.  Transfer meatballs to baking tray and bake for 20 minutes.',
                    // tslint:disable-next-line:max-line-length
                    'Heat a large frying pan over medium heat. Add oil and garlic, onion, fry until golden. Add chopped tomatoes, sugar, salt and paper and seasoning, cover and cook for 10 minutes. Add meatballs, cover and let meatballs simmer in sauce for 5 min extra flavour.',
                    // tslint:disable-next-line:max-line-length
                    'In a large pot bring at least 2L of water to boil, 1 teaspoon of  salt and 1 table spoon of olive oil, and than add spaghetti. Boil on medium heat for 5 minutes, and than drain.',
                    'Garnish with parmesan and parsley and basil.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Risotto with bacon & peas',
                thumbnail: 'https://img.youtube.com/vi/mPLYdh3Ie3g/0.jpg',
                video: 'https://www.youtube.com/watch?v=mPLYdh3Ie3g',
                cuisine: 'italian',
                time: 30,
                ingredients: [
                    {
                        name: 'All',
                        ingredients: [
                            {name: 'shallot finely diced', amount: '1 item'},
                            {name: 'streaky bacon, chopped', amount: '3 rashers'},
                            {name: 'risotto rice', amount: '150g'},
                            {name: 'frozen pea', amount: '50g'},
                            {name: 'hot vegetable stock', amount: '0.5L'},
                            {name: 'olive oil', amount: '1 tbsp'},
                            {name: 'butter', amount: '10g'},
                            {name: 'pepper', amount: '1 pinch'},
                            {name: 'grated Parmesan cheese', amount: '1/2 cup'},
                        ]
                    }
                ],
                method: [
                    // tslint:disable-next-line:max-line-length
                    'Heat frying pan over medium heat, add olive oil and a knob of butter, add the onions and fry until lightly browned (about 7 minutes). Add the bacon and fry for a further 5 minutes, until it starts to crisp.',
                    // tslint:disable-next-line:max-line-length
                    'Add the rice, than stock, and bring to the boil. Stir well, then reduce the heat and cook, covered, for 15-20 minutes until the rice is almost tender.',
                    // tslint:disable-next-line:max-line-length
                    'Stir in the peas, add a little salt and pepper and cook for a further 3 minutes, until the peas are cooked. Serve sprinkled with parmesan and black pepper.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Pizza Margherita',
                thumbnail: 'https://img.youtube.com/vi/mPLYdh3Ie3g/0.jpg',
                video: 'https://www.youtube.com/watch?v=mPLYdh3Ie3g',
                cuisine: 'italian',
                time: 35,
                ingredients: [
                    {
                        name: 'Base',
                        ingredients: [
                            {name: 'strong bread flour', amount: '150g'},
                            {name: 'instant yeast', amount: '1/2 tsp'},
                            {name: 'salt', amount: '1/2 tsp'},
                            {name: 'olive oil, plus extra for drizzling', amount: '1 tbsp'},
                        ]
                    },
                    {
                        name: 'Tomato sauce',
                        ingredients: [
                            {name: 'passata', amount: '50ml'},
                            {name: 'handful fresh basil', amount: '1/2 cup'},
                            {name: 'garlic, crushed', amount: '1 clove'},
                        ]
                    },
                    {
                        name: 'Topping',
                        ingredients: [
                            {name: 'ball mozzarella, sliced', amount: '50g'},
                            {name: 'grated Parmesan cheese', amount: '1/2 cup'},
                            {name: 'cherry tomatoes, halved', amount: '1/2 cup'},
                        ]
                    }
                ],
                method: [
                    // tslint:disable-next-line:max-line-length
                    'Base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 100ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.',
                    // tslint:disable-next-line:max-line-length
                    'Sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.',
                    // tslint:disable-next-line:max-line-length
                    'Roll out the dough: If you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large thin rounds, about 25cm across. Lift the rounds onto floured baking sheets.',
                    // tslint:disable-next-line:max-line-length
                    'Top and bake: Heat oven to 240C/fan 220C /gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8 -10 mins until crisp. Serve with a little more olive oil, and basil leaves if using.',
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
        ];
        return recipes;
    }

    public run(recipes: Recipe[]) {
        for (const recipe of recipes) {
            this.recipeService.create(recipe);
        }
    }
}
