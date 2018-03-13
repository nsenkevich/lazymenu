export interface Recipe {
  id?: string;
  name: string;
  thumbnail: string;
  video: string;
  cuisine:  string;
  time: number;
  ingredients: any[];
  method: string[];
  allergy: string[];
  diet: string[];
  likes: number;
}
