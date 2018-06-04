import { Recipe } from '../recipes/recipe.model';

export const MenuStatus: Object = {
  Previous: {
    value: 'previous'
  },
  Current: {
    value: 'current'
  },
  Next: {
    value: 'next'
  },
  Pending: {
    value: 'pending'
  }
};

export interface Menu {
  id: string;
  status: string;
  description: string;
  recipes: Array<Recipe>;
}
