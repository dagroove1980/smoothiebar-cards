import type { Smoothie } from '@/types/smoothie';
import { SITE_URL, goalLabels, flavorLabels } from './constants';

export function smoothieMetaTitle(smoothie: Smoothie): string {
  return `${smoothie.name} — ${goalLabels[smoothie.goal]} ${flavorLabels[smoothie.flavor]} Smoothie Recipe`;
}

export function smoothieMetaDescription(smoothie: Smoothie): string {
  const dietList = smoothie.diet.length > 0 ? smoothie.diet.join(', ') : '';
  const ingredientPreview = smoothie.ingredients.slice(0, 3).map((i) => i.name).join(', ');
  return `${smoothie.tagline} Made with ${ingredientPreview} and more. ${smoothie.nutrition.calories} cal, ${smoothie.nutrition.protein}g protein. ${dietList ? `${dietList}.` : ''} Ready in ${smoothie.prepTime}.`;
}

export function smoothieStructuredData(smoothie: Smoothie) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: smoothie.name,
    description: smoothie.tagline,
    prepTime: `PT${smoothie.prepTime.replace(' min', 'M')}`,
    totalTime: `PT${smoothie.prepTime.replace(' min', 'M')}`,
    recipeYield: `${smoothie.servings} serving${smoothie.servings > 1 ? 's' : ''}`,
    recipeCategory: 'Smoothie',
    recipeCuisine: 'American',
    keywords: [
      smoothie.goal,
      smoothie.flavor,
      ...smoothie.diet,
      'smoothie recipe',
      'healthy smoothie',
    ].join(', '),
    recipeIngredient: smoothie.ingredients.map((i) => `${i.amount} ${i.name}`),
    recipeInstructions: smoothie.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.label,
      text: step.text,
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${smoothie.nutrition.calories} calories`,
      proteinContent: `${smoothie.nutrition.protein}g`,
      fiberContent: `${smoothie.nutrition.fiber}g`,
      sugarContent: `${smoothie.nutrition.sugar}g`,
    },
  };
}

export function collectionStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
  };
}

export function breadcrumbStructuredData(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
