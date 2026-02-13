import type { Smoothie, Goal, Flavor, Diet, SortOption } from '@/types/smoothie';
import smoothiesData from '../../data/smoothies.json';

const smoothies: Smoothie[] = smoothiesData as Smoothie[];

export function getAllSmoothies(): Smoothie[] {
  return smoothies;
}

export function getSmoothieById(id: string): Smoothie | undefined {
  return smoothies.find((s) => s.id === id);
}

export interface FilterOptions {
  goal?: Goal;
  flavor?: Flavor;
  diet?: Diet;
}

export function filterSmoothies(options: FilterOptions): Smoothie[] {
  let result = [...smoothies];

  if (options.goal) {
    result = result.filter((s) => s.goal === options.goal);
  }
  if (options.flavor) {
    result = result.filter((s) => s.flavor === options.flavor);
  }
  if (options.diet) {
    result = result.filter((s) => s.diet.includes(options.diet!));
  }

  return result;
}

export function sortSmoothies(list: Smoothie[], sort: SortOption): Smoothie[] {
  const sorted = [...list];
  switch (sort) {
    case 'popular':
      return sorted.sort((a, b) => b.likes - a.likes);
    case 'new':
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'random':
      return sorted.sort(() => Math.random() - 0.5);
    default:
      return sorted;
  }
}

export function getSimilarSmoothies(smoothie: Smoothie, count = 4): Smoothie[] {
  const others = smoothies.filter((s) => s.id !== smoothie.id);

  const scored = others.map((s) => {
    let score = 0;
    // Same goal (most important)
    if (s.goal === smoothie.goal) score += 3;
    // Same flavor
    if (s.flavor === smoothie.flavor) score += 2;
    // Shared diets
    const sharedDiets = s.diet.filter((d) => smoothie.diet.includes(d)).length;
    score += sharedDiets;
    return { smoothie: s, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.smoothie);
}

export function getRandomSmoothie(exclude?: string[], fromList?: Smoothie[]): Smoothie {
  const pool = (fromList || smoothies).filter((s) => !exclude?.includes(s.id));
  return pool[Math.floor(Math.random() * pool.length)];
}

interface CombinedFilter {
  goal: Goal;
  sub: string;
  subType: 'flavor' | 'diet';
  count: number;
}

export function getValidCombinedFilters(): CombinedFilter[] {
  const combos: CombinedFilter[] = [];
  const goals: Goal[] = [
    'energy', 'protein', 'detox', 'immunity',
    'weight-loss', 'recovery', 'beauty', 'calm',
  ];
  const flavors: Flavor[] = [
    'green', 'berry', 'tropical', 'citrus',
    'chocolate', 'nutty', 'creamy', 'refreshing',
  ];
  const diets: Diet[] = [
    'vegan', 'keto', 'high-protein', 'low-sugar',
    'dairy-free', 'nut-free', 'paleo', 'whole30',
  ];

  for (const goal of goals) {
    for (const flavor of flavors) {
      const matched = smoothies.filter(
        (s) => s.goal === goal && s.flavor === flavor
      );
      if (matched.length >= 4) {
        combos.push({ goal, sub: flavor, subType: 'flavor', count: matched.length });
      }
    }
    for (const diet of diets) {
      const matched = smoothies.filter(
        (s) => s.goal === goal && s.diet.includes(diet)
      );
      if (matched.length >= 4) {
        combos.push({ goal, sub: diet, subType: 'diet', count: matched.length });
      }
    }
  }

  return combos;
}
