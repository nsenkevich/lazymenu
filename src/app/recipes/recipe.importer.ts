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
                thumbnail: '',
                video: '',
                cuisine: 'italian',
                time: 20,
                ingredients: [{
                    name: 'All',
                    ingredients: [
                        '0.5 package fresh cheese tortellini',
                        '1/4 tablespoon pine nuts',
                        '1/2 teaspoon olive oil',
                        '1 large garlic clove, finely diced',
                        '100g fresh baby spinach, washed',
                        'small handful grated Parmesan cheese',
                        '15g prosciutto, thinly sliced',
                        'black pepper'
                    ]
                }
                ],
                method: [
                    'Cook pasta according to the package directions, omitting salt and fat; drain. Transfer pasta to a large bowl.',
                    'Heat a large frying pan over medium heat. Add nuts; cook until toasted (1 - 1/2 minutes), stir occasionally. Move nuts to bowl.',
                    'Heat oil in pan over medium heat. Add garlic to pan; cook 2 minutes, stirring occasionally. Add spinach to pan; cook 2 minutes or until spinach wilts. Add spinach mixture, cheese, and remaining ingredients to bowl; toss well.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },

            {
                name: 'Creamy polenta with mushroom ragout',
                thumbnail: '',
                video: '',
                cuisine: 'italian',
                time: 40,
                ingredients: [
                    {
                        name: 'ragout',
                        ingredients: [
                            'small handful dried porcini mushrooms',
                            '10g butter',
                            '1 shallot finely chopped',
                            '1garlic clove, crushed',
                            '1 thyme sprig, leaves picked',
                            '125g large field mushroom, sliced',
                            '50g chestnut mushroom, sliced',
                            'small glass of red wine',
                            '25g Taleggio cheese, sliced',
                            '50ml vegetable stock',
                        ]
                    },
                    {
                        name: 'pollenta',
                        ingredients: [
                            '125 ml milk',
                            'small handful grated Parmesan cheese',
                            '1 bay leaf',
                            '1 thyme sprig',
                            '75g instant polenta',
                            '10g butter',
                        ]
                    }
                ],
                method: [
                    'Soak the dried porcini in 50ml of warm water.  In 20 mins drain and reserve the soaking liquid. ',
                    'In large saucepan bring milk and 1250ml of water to boil, add bay leaf and thyme. Turn off the heat and leave to infuse for 20 mins',
                    'Heat frying pan over medium heat, add butter, shallot and cook until soft. Add garlic and thyme leaves, cook for 1 minute. Turn up the heat and add porcini, cook for 1 min and then add all the other mushrooms. Fry over a very high heat for 5 mins until soft. Splash in the red wine and boil rapidly for 1 min. Pour in the stock and reserved mushroom liquid,  simmer for 15 mins until the stew thickens',
                    'Fish out the herbs from infused milk and bring it to boil. Add the polenta in a slow stream while whisking steadily. Cook for 1 min until thickened, then stir in the butter and Parmesan. Make a well of polenta onto a baking tray and fill with the ragout. Top with slices of Taleggio, place under a hot grill until cheese starts melting.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Meatball spaghetti',
                thumbnail: '',
                video: '',
                cuisine: 'italian',
                time: 45,
                ingredients: [
                    {
                        name: 'Meatballs',
                        ingredients: [
                            '1lbs lean ground beef',
                            '2 slices white bread, soaked in warm wetter',
                            '1 egg, slightly beaten',
                            '1 large garlic clove, crashed',
                            '1/4 teaspoon Italian seasoning (or to taste)',
                            'Parsley chopped',
                            'small handful grated Parmesan cheese',
                            '1 teaspoon salt',
                            'Salt and pepper',
                            'olive or vegetable oil oil (for frying)',
                        ]
                    },
                    {
                        name: 'Souse',
                        ingredients: [
                            '1 white small onion, diced',
                            '1/2 can chopped plum tomatoes',
                            '1 teaspoon sugar',
                            '1 garlic clove, crashed',
                            '1 tablespoon olive oil',
                            'Salt and pepper',
                            'fresh spaghetti',
                        ]
                    }
                ],
                method: [
                    'Preheat oven to 240C/fan 220C /gas 8. Meatballs: Mix all ingredients in a large bowl until evenly mixed. Roll 1,5 - 2 inches large meatballs.  Transfer meatballs to baking tray and bake for 20 minutes.',
                    'Heat a large frying pan over medium heat. Add oil and garlic, onion, fry until golden. Add chopped tomatoes, sugar, salt and paper and seasoning, cover and cook for 10 minutes. Add meatballs, cover and let meatballs simmer in sauce for 5 min extra flavour.',
                    'In a large pot bring at least 2L of water to boil, 1 teaspoon of  salt and 1 table spoon of olive oil, and than add spaghetti. Boil on medium heat for 5 minutes, and than drain.',
                    'Garnish with parmesan and parsley and basil.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Risotto with bacon & peas',
                thumbnail: '',
                video: '',
                cuisine: 'italian',
                time: 30,
                ingredients: [
                    {
                        name: 'All',
                        ingredients: [
                            '1 shallot finely diced',
                            '3 rashers streaky bacon, chopped',
                            '150g risotto rice',
                            '50g frozen pea',
                            '0.5L hot vegetable stock',
                            '1 tablespoon of olive oil',
                            '10g butter',
                            'pepper',
                            'small handful grated Parmesan cheese',
                        ]
                    }
                ],
                method: [
                    'Heat frying pan over medium heat, add olive oil and a knob of butter, add the onions and fry until lightly browned (about 7 minutes). Add the bacon and fry for a further 5 minutes, until it starts to crisp.',
                    'Add the rice, than stock, and bring to the boil. Stir well, then reduce the heat and cook, covered, for 15-20 minutes until the rice is almost tender.',
                    'Stir in the peas, add a little salt and pepper and cook for a further 3 minutes, until the peas are cooked. Serve sprinkled with parmesan and black pepper.'
                ],
                allergy: [],
                diet: [],
                likes: 0
            },
            {
                name: 'Pizza Margherita',
                thumbnail: '',
                video: '',
                cuisine: 'italian',
                time: 35,
                ingredients: [
                    {
                        name: 'Base',
                        ingredients: [
                            '150g strong bread flour',
                            '0.5 tsp instant yeast',
                            '0.5 tsp salt',
                            '1 tbsp olive oil, plus extra for drizzling',
                            'Tomato sauce',
                            '50ml passata',
                            'handful fresh basil',
                            '1 garlic clove, crushed'
                        ]
                    },
                    {
                        name: 'Topping',
                        ingredients: [
                            '50g ball mozzarella, sliced',
                            'handful grated Parmesan cheese',
                            'handful cherry tomatoes, halved',
                        ]
                    }
                ],
                method: [
                    'Base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 100ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.',
                    'Sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.',
                    'Roll out the dough: If you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large thin rounds, about 25cm across. Lift the rounds onto floured baking sheets.',
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
