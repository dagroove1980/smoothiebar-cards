export type Goal =
  | 'energy'
  | 'protein'
  | 'detox'
  | 'immunity'
  | 'weight-loss'
  | 'recovery'
  | 'beauty'
  | 'calm';

export type Flavor =
  | 'green'
  | 'berry'
  | 'tropical'
  | 'citrus'
  | 'chocolate'
  | 'nutty'
  | 'creamy'
  | 'refreshing';

export type Diet =
  | 'vegan'
  | 'keto'
  | 'high-protein'
  | 'low-sugar'
  | 'dairy-free'
  | 'nut-free'
  | 'paleo'
  | 'whole30';

export type SortOption = 'popular' | 'new' | 'random';

export interface Ingredient {
  emoji: string;
  name: string;
  amount: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  fiber: number;
  sugar: number;
}

export interface Step {
  icon: string;
  color: string;
  label: string;
  text: string;
}

export interface Smoothie {
  id: string;
  name: string;
  heroIcon: string;
  heroColor: string;
  tagline: string;
  goal: Goal;
  flavor: Flavor;
  diet: Diet[];
  prepTime: string;
  servings: number;
  calories: number;
  ingredients: Ingredient[];
  steps: Step[];
  nutrition: Nutrition;
  tip: string;
  variations: string[];
  likes: number;
  createdAt: string;
  featured: boolean;
}
