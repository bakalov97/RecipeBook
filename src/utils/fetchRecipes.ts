import { Recipe } from '@/types/Recipe';

export async function fetchRecipes(): Promise<Array<Recipe>> {
  const result = await fetch('http://localhost:4000/recipes');

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json();
}
